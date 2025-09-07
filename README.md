# library-management-system

this is a library management API Backend fro the management of users and books.

# routes and end points

## /users

GET : get all the users in the system
POST :create/register a new user

## /users(id)

GET :get the user by id
PUT : updating a user by their id
DELETE: deleting a user by their id(check if the user still have issued book ) && (is there any fine to be collected)

## /users/subscription-details/(id)

GET: get a users subscription by their id >> date of subscription >>valid till? >>fine if any?

## /books

GET : get all the books in a system
POST : add a new book to the system

## /books(id)

GET :get a book by its id
PUT : update the book by their id
DELETE : delete a book by its id

## /books/issued

GET :get all the issued books

## /books/issued/withFines

GET : get all issued books with their amount

## subscriptions Types

    >>basic (3 months)
    >>standard (6 months)
    >>premium (12 months)

> > if a user misses the renowel date then he will be collected with 100
> > if a user misses his subscription then he is expected to pay 100
> > if user misses both renowel and subscription then collected amount shold be 200

## COMMANDS

npm init
npm i express
npm i nodemon
