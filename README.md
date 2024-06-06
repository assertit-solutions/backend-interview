# Settings Express App

## Introduction & Setup
#### **Time Limit**: 10 minutes

This is a simple express application which interacts with a Postgres Database and allows you to create settings.

## Setting

Consider settings as switches in a huge application - these switches can be turned on/off or can hold a custom value. These settings correspond to a particular user or an account in your system. A setting has the following properties:

- name (what do you want to call it)
- value (value of the setting)
- dataType (data type can be boolean, number or string)
- source_type (it can either be a user or an account)
- source_id (this is a number - id of the user/account in the database)

Example of a setting:
```
{
  "name": "My awesome feature",
  "value": true,
  "source_type": "user",
  "source_id": 412
}
```

To get started with this application, make sure your system has the following:

- Node JS
- Docker

Checkout this repo and bring up postgres by running: 
`docker-compose -f docker-compose.yml up --build`

In a separate tab in your terminal, run:

```
yarn
npx sequelize-cli db:migrate
```

After this, boot the application by running `DEBUG=settings-app:* yarn start`

## Tips

The way a table is created can be seen in `migrations/20220816165114-create-setting.js`

The model for setting is available in `models/setting.js`

Setting is created in the file `services/settings.js` - this is where you will write most of your code.

## Goal

### Add validation to create setting API
#### **Time Limit**: 20 minutes

- Validate all mandatory inputs
- Validate dataType that's being sent in the request
- anything else?

To validate dataType you need to make sure that the following is not possible:

```
{
  "name": "xyz",
  "value": "abc",
  "source_type": "user",
  "dataType": "number",
  "source_id": 1
}
```
`abc` here is a string and not a number.

Similarly, the following should also throw a validation error:

```
{
  "name": "xyz",
  "value": 10,
  "source_type": "user",
  "dataType": "boolean",
  "source_id": 1
}
```
If `dataType` is `"boolean"`, value can only be `true` or `false` (do not allow even 0 and 1).

### Allow creating settings with JSON data type
#### **Time Limit**: 30 minutes
What changes would you do to add support for JSON data type?