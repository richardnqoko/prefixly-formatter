
# Changelog

## [Unreleased]

### Added
- Be able to format millions and billions.
- Optimized formatting algorithm to handle any use cases.

## [1.0.0] - 2024-08-04

### Features
- **Initial Release**: Introduced the `prefixly-formatter` module for formatting numbers with unit prefixes.
- **`prefX` Function**: Added a function to format numbers with units like thousands (`K`) and optional decimal precision.
- **Utility Functions**:
  - **`convertNumber(num: number, unit: number, point?: number): number`**: Converts numbers by dividing them with a specified unit and rounding to a defined number of decimal points.
  - **`deciPoint(num: number, decimalPoint: number): number`**: Rounds numbers to the specified number of decimal places.

### Usage

- **Installation**: Install using npm with `npm install prefixly-formatter`.
- **Basic Usage**:
  ```typescript
  import { prefX } from 'prefixly-formatter';

  const formattedNumber = prefX(12345.6789, 2);
  console.log(formattedNumber); // Outputs: "12.35K"
  ```
- **API**:
  - **`prefX(num: number, point?: number): string`**:
    - **num**: The number to format.
    - **point** (optional): Number of decimal places in the formatted output.
    - Returns a string with the formatted number and unit prefix.
  
  - **Utility Functions**:
    - **`convertNumber(num: number, unit: number, point?: number): number`**: Converts and optionally rounds the number.
    - **`deciPoint(num: number, decimalPoint: number): number`**: Rounds the number to the specified decimal points.

### Fixed
- **Precision Handling**: Improved precision handling in `convertNumber` and `deciPoint` functions.

### Changed
- **Formatting Logic**: Adjusted formatting logic to handle thousands (`K`) with optional decimal precision.
