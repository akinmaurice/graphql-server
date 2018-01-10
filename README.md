# graphQL-server

graphQL Server with Mongo DB (Mongoose), Node JS and Express JS

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

# License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details
