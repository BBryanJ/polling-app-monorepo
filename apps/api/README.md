# Polling App API

## Endpoints

### GET /polls

Returns a list of polls.

#### Response

```json
[
  {
    "id": 1,
    "title": "What is the best programming language?",
    "options": [
      { "optionId": 1, "name": "JavaScript", "votes": 0 },
      { "optionId": 2, "name": "Python", "votes": 0 },
      { "optionId": 3, "name": "Ruby", "votes": 0 },
      { "optionId": 4, "name": "PHP", "votes": 0 },
      { "optionId": 5, "name": "C", "votes": 0 }
    ],
    "created_at": "2020-01-01T00:00:00.000Z",
    "updated_at": "2020-01-01T00:00:00.000Z",
    "votes": 0
  },
  {
    "id": 2,
    "title": "What is the best JavaScript framework?",
    "options": [
      { "optionId": 1, "name": "React", "votes": 0 },
      { "optionId": 2, "name": "Angular", "votes": 0 },
      { "optionId": 3, "name": "Vue", "votes": 0 },
      { "optionId": 4, "name": "Ember", "votes": 0 },
      { "optionId": 5, "name": "Backbone", "votes": 0 }
    ],
    "created_at": "2020-01-01T00:00:00.000Z",
    "updated_at": "2020-01-01T00:00:00.000Z",
    "votes": 0
  }
]
```

### GET /polls/:id

Returns a poll by its ID.

#### Response

```json
{
  "id": 1,
  "title": "What is the best programming language?",
  "options": [
    { "optionId": 1, "name": "JavaScript", "votes": 0 },
    { "optionId": 2, "name": "Python", "votes": 0 },
    { "optionId": 3, "name": "Ruby", "votes": 0 },
    { "optionId": 4, "name": "PHP", "votes": 0 },
    { "optionId": 5, "name": "C", "votes": 0 }
  ],
  "created_at": "2020-01-01T00:00:00.000Z",
  "updated_at": "2020-01-01T00:00:00.000Z",
  "votes": 0
}
```

### GET /polls/:id/option

Returns a poll's options by its ID.

#### Response

```json
  "options": [
    {"optionId": 1, "name": "JavaScript", "votes": 0},
    {"optionId": 2, "name":"Python", "votes": 0},
    {"optionId": 3, "name":"Ruby", "votes": 0},
    {"optionId": 4, "name":"PHP", "votes": 0},
    {"optionId": 5, "name":"C", "votes": 0}
  ]
```

### GET /polls/:id/option/:optionId

Returns a poll's option by its optionId.

#### Response

```json
{ "optionId": 1, "name": "JavaScript", "votes": 0 }
```
