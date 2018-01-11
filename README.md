# graphQL-server

graphQL Server with Mongo DB (Mongoose), Node JS and Express JS


# Getting Started
```
1. git clone https://github.com/akinmaurice/graphql-server.git
2. cd graphql-server
3. npm install
4. Add MongoDB connection String to .envSample file
5. Rename .envSample file to .env
6. npm start
```

The above will get you a copy of the project up and running on your local machine for development and testing purposes.


# USERS

## Example GraphQL Query to get all Users

```
query {
  Users {
    email
    name
  }
}
```

## Example Response to get all Users

```
{
  "data": {
    "Users": [
      {
        "email": "akin@gmail.com",
        "name": "Akintayo Akinyemi"
      },
      {
        "email": "akinyemi@gmail.com",
        "name": "Akin Maurice"
      },
      {
        "email": "akingithub@gmail.com",
        "name": "John Doe"
      }
    ]
  }
}
```


## Example GraphQL Query to get a single User

```
query{
  User(id: "5a5667d0763358725e13a65c") {
    email
    name
    posts {
      title
      content
    }
  }
}
```

## Example Response to get a single User

```
{
  "data": {
    "User": {
      "email": "akinyemi@gmail.com",
      "name": "John Doe",
      "posts": [
        {
          "title": "Sample POst Test",
          "content": "Sample Post Content"
        },
        {
          "title": "Sample Post Test 2",
          "content": "Sample Post Contgigbgkgent"
        }
      ]
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


## Example GraphQL Mutation to Update User

```
mutation {
  UpdateUser(
    id: "5a5667d0763358725e13a65c",
    data: {
      name: "Akin Maurice"
    }
  )
}
```

## Example GraphQL Mutation Update User Response

```
{
  "data": {
    "UpdateUser": {
      "email": "akinyemi@gmail.com",
      "name": "Akin Maurice"
    }
  }
}
```

## Example GraphQL Mutation to Delete User

```
mutation {
  DeleteUser (id: "5a5667d0763358725e13a65c")
}
```

## Example GraphQL Mutation Response to Delete User

```
{
  "data": {
    "DeleteUser": {
      "email": "akinyemi@gmail.com",
      "name": "Akin Maurice"
    }
  }
}
```


# POSTS

## Example GraphQL Mutation to Create Post

```
mutation {
  Addpost (data: {
  author: "5a5667d0763358725e13a65c",
    title: "Sample Post Test 2",
    content: "Sample Post Contgigbgkgent"
  })
}

```

## Example GraphQL Mutation to Create Post Response

```
{
  {
  "data": {
    "Addpost": {
      "author": "5a5667d0763358725e13a65c",
      "title": "Sample Post Test",
      "content": "Sample Post Confhgjhghtgigbgkgent"
    }
  }
}
}
```

## Example GraphQL Query to List all Posts

```
query {
  # List All Posts
  Posts {
    title
    content
    comments {
      email
      name
      comment
    }
  }
}
```

## Example GraphQL Response to List all Posts

```
{
  "data": {
    "Posts": [
      {
        "title": "Sample Post Test",
        "content": "Sample Post Content",
        "comments": [
          {
            "email": "akinyemi@gmai.com",
            "name": "Akintayo Akinyemi",
            "comment": "First Comment For the Post"
          }
        ]
      },
      {
        "title": "Sample Post Test 2",
        "content": "Sample Post Contgigbgkgent",
        "comments": []
      }
    ]
  }
}
```

## Example GraphQL Query to List a single Post

```
query {
  # List All Posts
  Post(id: "5a56a3b9c119431217a372e9") {
    title
    content
    comments {
      email
      name
      comment
    }
  }
}
```

## Example GraphQL Response to List a single Post

```
{
  "data": {
    "Post": [
      {
        "title": "Sample Post Test",
        "content": "Sample Post Content",
        "comments": [
          {
            "email": "akinyemi@gmai.com",
            "name": "Akintayo Akinyemi",
            "comment": "First Comment For the Post"
          }
        ]
      }
    ]
  }
}
```

# Comment


## Example GraphQL Mutation to Create Comment

```
mutation {
  Addcomment (data: {
    article: "5a56a3b9c119431217a372e9",
    name: "Akintayo Akinyemi",
    email: "akinyemi@gmai.com",
    comment: "First Comment For the Post"
  })
}
```

## Example GraphQL Mutation to Create Comment Response

```
{
  "data": {
    "Addcomment": {
      "article": "5a56a3b9c119431217a372e9",
      "email": "akinyemi@gmai.com",
      "name": "Akintayo Akinyemi",
      "comment": "First Comment For the Post"
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
