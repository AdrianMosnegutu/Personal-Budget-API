# Personal Budget API

A REST API that allows users to manage their budget using the 'envelope method'.

## Features

- Create, update, delete, and retrieve budget envelopes
- Transfer amounts between envelopes
- Error handling for API calls

## Technologies Used

- JavaScript
- Express.js
- Node.js

## Endpoints

### Envelopes
- `GET /envelopes`: Retrieve all budget envelopes
- `GET /envelopes/:envelopeId`: Retrieve a specific budget envelope
- `POST /envelopes`: Create a new budget envelope
- `PATCH /envelopes/:envelopeId`: Update a specific budget envelope
- `DELETE /envelopes/:envelopeId`: Delete a specific budget envelope
- `POST /envelopes/transfer/:from/:to`: Transfer an amount from one envelope to another

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AdrianMosnegutu/Personal-Budget-API.git
    ```
2. Install dependencies:
    ```bash
    cd Personal-Budget-API
    npm install
    ```
3. Start the server:
    ```bash
    npm run dev
    ```

## Contributing

Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
