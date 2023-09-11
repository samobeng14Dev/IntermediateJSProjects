# Currency Conversion App Documentation

## Overview

The Currency Conversion App is a web application that allows users to convert currencies based on real-time exchange rates. It provides a user-friendly interface for selecting currencies, entering the amount to be converted, and displaying the converted amount. The app utilizes the ExchangeRate-API to fetch the latest exchange rates and perform currency conversions.

## Features

The Currency Conversion App offers the following features:

1. **Real-time Exchange Rates**: The app fetches the latest exchange rates from the ExchangeRate-API, ensuring that the conversion rates are up to date.

2. **Currency Selection**: Users can choose the base currency and the target currency from dropdown menus. The available currency options are dynamically populated based on the data from the API.

3. **Conversion Rate Display**: The app displays the current conversion rate between the selected currencies. The conversion rate is updated automatically when the base currency, target currency, or the amount to be converted is changed.

4. **Amount Conversion**: Users can enter an amount in the input field, and the app instantly calculates and displays the converted amount based on the selected currencies and the current conversion rate.

5. **Invert Currency**: The app provides a button that allows users to swap the selected base currency and target currency. This feature is useful when users want to quickly switch between converting from one currency to another.

6. **Display Conversion Rates**: Users can view a list of conversion rates for the selected base currency by clicking the "Display Conversion Rates" button. The app fetches the conversion rates from the API and presents them in a formatted list.

7. **Last Update Time**: The app displays the timestamp of the last update for the exchange rates. This information helps users to understand the freshness of the conversion rates.

## Usage

To use the Currency Conversion App, follow these steps:

1. Open the Currency Conversion App in a web browser.

2. Select the base currency by choosing a currency from the first dropdown menu.

3. Select the target currency by choosing a currency from the second dropdown menu.

4. Enter the amount you want to convert into the input field.

5. The conversion rate will be automatically updated based on the selected currencies. The converted amount will be displayed accordingly.

6. To swap the base and target currencies, click the "Invert Currency" button. The conversion rate and converted amount will be updated accordingly.

7. To display a list of conversion rates for the selected base currency, click the "Display Conversion Rates" button. The conversion rates will be fetched from the API and presented in a formatted list.

8. The timestamp of the last update for the exchange rates will be displayed at the bottom of the app, indicating the freshness of the rates.

## Dependencies

The Currency Conversion App relies on the following dependencies:

- ExchangeRate-API: The app uses the ExchangeRate-API to fetch the latest exchange rates. It requires a stable internet connection to access the API.

## Compatibility

The Currency Conversion App is compatible with modern web browsers that support JavaScript and the Document Object Model (DOM) manipulation. Some examples of compatible browsers include Google Chrome, Mozilla Firefox, and Microsoft Edge.

## Conclusion

The Currency Conversion App provides a convenient way for users to perform currency conversions based on real-time exchange rates. With its intuitive interface and up-to-date exchange rate information, users can easily convert currencies and stay informed about the latest exchange rates.
