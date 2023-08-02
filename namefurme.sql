CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(15)
);

CREATE TABLE pets (
    pet_id SERIAL PRIMARY KEY,
    breed VARCHAR(255) NOT NULL,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE votes (
    vote_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    pet_id INT REFERENCES pets(pet_id),
    CONSTRAINT unique_vote_per_user_pet UNIQUE (user_id, pet_id)
);
