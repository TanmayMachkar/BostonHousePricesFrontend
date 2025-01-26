
# Boston House Price Prediction using Linear Regression

This project uses a machine learning model built with linear regression to predict house prices based on the Boston housing dataset. The model is trained on the dataset, serialized into a pickle file, and served via a Flask backend. The frontend is built using React, where users can input data to receive house price predictions.

## Tech Stack

- **Machine Learning**: 
  - Python
  - Scikit-Learn (for linear regression model)
  - Pickle (for saving the model)
- **Backend**: 
  - Flask (Python web framework)
  - Gunicorn (WSGI server for deploying the Flask app)
- **Frontend**: 
  - React (for the user interface)
- **Deployment**: 
  - Flask app deployed on Render
  - Frontend hosted on Vercel

## Installation

### Backend Setup

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/TanmayMachkar/ML-1.git
   cd ML-1
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server**:
   After the model is trained, start the Flask backend server:
   ```bash
   python app.py
   ```

   The backend will be running at `http://127.0.0.1:5000/`.

### Frontend Setup

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/TanmayMachkar/BostonHousePricesFrontend.git
   cd BostonHousePricesFrontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the React app**:
   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

### 4. Deploying on Render

- Deploy the Flask backend to Render using the `render.yaml` configuration file.
- The React frontend is deployed to Vercel.

## How it Works

1. The **React frontend** takes user inputs such as crime rate, average number of rooms, etc., from the Boston housing dataset.
2. The data is sent to the **Flask API**, which loads 2 pre-trained linear regression model (`regmodel.pkl`) and (`scaling.pkl`) and makes predictions.
3. The **Flask API** sends the predicted price back to the React frontend for display.

## Example Usage

After the app is running, visit the frontend at `http://localhost:3000`. Enter the necessary input values and click on the "Predict" button to see the predicted house price.

## Files

### Backend Repository

- `app.py`: Flask app that serves the model and handles predictions.
- `requirements.txt`: Python dependencies for the Flask app.

### Frontend Repository

- `src/`: Directory containing the React frontend code.

## Contributing

Feel free to fork the repositories and make improvements. If you want to contribute, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
