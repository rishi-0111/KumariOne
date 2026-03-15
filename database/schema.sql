-- KumariOne Database Schema (PostgreSQL + PostGIS)
-- Enable PostGIS extension for geospatial queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('Tourist', 'Business Owner', 'Tribal Vendor', 'Admin')),
    phone VARCHAR(20),
    preferred_language VARCHAR(10) DEFAULT 'en',
    dark_mode BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Businesses
CREATE TABLE businesses (
    business_id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    geom GEOMETRY(Point, 4326), -- PostGIS Point
    verified BOOLEAN DEFAULT FALSE
);

-- 3. Attractions
CREATE TABLE attractions (
    attraction_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    geom GEOMETRY(Point, 4326), -- PostGIS Point
    category VARCHAR(100),
    rating DECIMAL(3, 2) DEFAULT 0.0
);

-- 4. Hotels
CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    price DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    contact VARCHAR(50)
);

-- 5. Bookings
CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    hotel_id INT REFERENCES hotels(hotel_id) ON DELETE CASCADE,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status VARCHAR(50) DEFAULT 'Pending'
);

-- 6. Reviews
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    place_id INT, -- Generic reference id to attractions/hotels
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Tribal Vendors
CREATE TABLE tribal_vendors (
    vendor_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    community VARCHAR(100),
    location VARCHAR(255),
    contact VARCHAR(50),
    verified BOOLEAN DEFAULT FALSE
);

-- 8. Tribal Products
CREATE TABLE tribal_products (
    product_id SERIAL PRIMARY KEY,
    vendor_id INT REFERENCES tribal_vendors(vendor_id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2),
    description TEXT,
    image_url VARCHAR(255)
);

-- 9. Orders
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES tribal_products(product_id),
    user_id INT REFERENCES users(user_id),
    payment_status VARCHAR(50) DEFAULT 'Pending',
    delivery_status VARCHAR(50) DEFAULT 'Processing'
);

-- 10. Emergency Services
CREATE TABLE emergency_services (
    service_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    geom GEOMETRY(Point, 4326), -- PostGIS Point
    contact VARCHAR(50)
);

-- Geo triggers to populate geom automatically
CREATE OR REPLACE FUNCTION update_geom()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.latitude IS NOT NULL AND NEW.longitude IS NOT NULL THEN
        NEW.geom = ST_SetSRID(ST_MakePoint(NEW.longitude, NEW.latitude), 4326);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_businesses_geom
BEFORE INSERT OR UPDATE ON businesses
FOR EACH ROW EXECUTE FUNCTION update_geom();

CREATE TRIGGER trg_attractions_geom
BEFORE INSERT OR UPDATE ON attractions
FOR EACH ROW EXECUTE FUNCTION update_geom();

CREATE TRIGGER trg_emergency_services_geom
BEFORE INSERT OR UPDATE ON emergency_services
FOR EACH ROW EXECUTE FUNCTION update_geom();
