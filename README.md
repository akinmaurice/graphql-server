# graphQL-server

graphQL Server with Mongo DB (Mongoose), Node JS and Express JS


## Getting Started
```
1. git clone https://github.com/akinmaurice/graphql-server.git
2. cd graphql-server
3. npm install
4. Add MongoDB connection String to .envSample file
5. Rename .envSample file to .env
6. npm start
```

The above will get you a copy of the project up and running on your local machine for development and testing purposes.


## Example GraphQL Query

```
query {
  User (id: "5a5665d101e39d6d4d7576c1"){
    name
  }
}
```

## Example Response

```
{
  "data": {
    "User": {
      "name": "Akintayo Akinyemi"
    }
  }
}
```

## Example GraphQL Mutation to Add User

```
mutation{
  AddUser(data: {
    email: "akingithub@gmail.com",
    name: "John Doe"
  })
}
```

## Example GraphQL Mutation Response

```
{
  "data": {
    "AddUser": {
      "email": "akingithub@gmail.com",
      "name": "John Doe"
    }
  }
}
```


# Used Technologies
* GraphQL
* MongoDB with Mongoose
* Node JS
* Express JS
* Babel


# License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details
