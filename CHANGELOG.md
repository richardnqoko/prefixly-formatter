
# Changelog

## [Unreleased]

### Added
- Be able to format any number up to trillions.
- Optimized formatting algorithm to handle any use cases.
- Format data sizes like bytes, gigabytes etc.
- Optional feature to specify expected output type.

## [2.2.0] - 2024-08-05

### Features
- **`prefx` Function**: Added a function to format numbers with units like thousands (`K`), millions (`M`) and billions (`M`).
- **Utility Functions**:
  - **`convertNumber(num: number, unit: number, point?: number): number`**: Converts numbers by dividing them with a specified unit and rounding to a defined number of decimal points.
  - **`deciPoint(num: number, decimalPoint: number): number`**: Cuts numbers to the specified number of decimal places.

### Usage

- **Installation**: Install using npm with `npm install prefixly-formatter`.
- **Basic Usage**:
  ```typescript
  import { prefx } from 'prefixly-formatter';

  const formattedNumber = prefx(12345.6789, 2);
  console.log(formattedNumber); // Outputs: "12.34K"
  ```
- **API**:
  - **`prefx(num: number, point?: number): string`**:
    - **num**: The number to format.
    - **point** (optional): Number of decimal places in the formatted output.
    - Returns a string with the formatted number and unit prefix.
  
  - **Utility Functions**:
    - **`convertNumber(num: number, unit: number, point?: number): number`**: Converts and optionally rounds the number.
    - **`deciPoint(num: number, decimalPoint: number): number`**: Rounds the number to the specified decimal points.

### Fixed
- **Precision Handling**: Improved precision handling in `convertNumber` and `deciPoint` functions.

### Changed
- **Formatting Logic**: Adjusted formatting logic to handle thousands (`K`), millions (`M`) and billions (`M`) with optional decimal precision.
- **Usage Function**: Changed main function from prefX to prefx.
