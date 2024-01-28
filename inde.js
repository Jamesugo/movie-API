class Movie {
    constructor(title, genre, year, price, available = true) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.price = price;
        this.available = available;
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.rentedMovies = [];
    }

    rentMovie(movie) {
        if (movie.available) {
            this.rentedMovies.push(movie);
            movie.available = false;
            console.log(`${this.name} has rented '${movie.title}'.`);
        } else {
            console.log(`Sorry, '${movie.title}' is not available for rent.`);
        }
    }

    returnMovie(movie) {
        const index = this.rentedMovies.indexOf(movie);
        if (index !== -1) {
            this.rentedMovies.splice(index, 1);
            movie.available = true;
            console.log(`${this.name} has returned '${movie.title}'.`);
        } else {
            console.log(`${this.name} does not have '${movie.title}' rented.`);
        }
    }
}

class RentalService {
    constructor() {
        this.movies = [];
        this.customers = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    rentMovie(customerName, movieTitle) {
        const customer = this.customers.find(cust => cust.name === customerName);
        const movie = this.movies.find(mov => mov.title === movieTitle);

        if (!customer) {
            console.log(`Customer '${customerName}' not found.`);
        } else if (!movie) {
            console.log(`Movie '${movieTitle}' not found.`);
        } else {
            customer.rentMovie(movie);
        }
    }

    returnMovie(customerName, movieTitle) {
        const customer = this.customers.find(cust => cust.name === customerName);
        const movie = this.movies.find(mov => mov.title === movieTitle);

        if (!customer) {
            console.log(`Customer '${customerName}' not found.`);
        } else if (!movie) {
            console.log(`Movie '${movieTitle}' not found.`);
        } else {
            customer.returnMovie(movie);
        }
    }
}

// Example usage:
const rentalService = new RentalService();

const movie1 = new Movie("Inception", "Sci-Fi", 2010, 5.99);
const movie2 = new Movie("The Shawshank Redemption", "Drama", 1994, 4.99);

const customer1 = new Customer("Alice", "alice@example.com");
const customer2 = new Customer("Bob", "bob@example.com");

rentalService.addMovie(movie1);
rentalService.addMovie(movie2);

rentalService.addCustomer(customer1);
rentalService.addCustomer(customer2);

rentalService.rentMovie("Alice", "Inception");
rentalService.rentMovie("Bob", "The Shawshank Redemption");
rentalService.returnMovie("Alice", "Inception");
