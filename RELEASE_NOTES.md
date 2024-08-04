### Release Notes

#### Version 1.0.0 - 2024-08-04

**Initial Release**

- **Overview**:
  - Introduced `prefixly-formatter`, a module for formatting numbers with unit prefixes. This utility helps in representing large numbers more clearly by converting them into a readable format with optional decimal precision.

- **Features**:
  - **`prefX` Function**:
    - Formats numbers with unit prefixes, such as thousands (`K`), and allows for optional decimal precision.
    - Example usage:
      ```typescript
      import { prefX } from 'prefixly-formatter';

      const formattedNumber = prefX(12345.6789, 2);
      console.log(formattedNumber); // Outputs: "12.35K"
      ```
  - **Utility Functions**:
    - **`convertNumber(num: number, unit: number, point?: number): number`**:
      - Converts a number by dividing it with a specified unit and optionally rounding it to the desired decimal places.
    - **`deciPoint(num: number, decimalPoint: number): number`**:
      - Rounds a number to the specified number of decimal places.

- **Installation**:
  - Install the module via npm:
    ```bash
    npm install prefixly-formatter
    ```

- **Usage**:
  - Import and use the `prefX` function to format numbers. For example:
    ```typescript
    import { prefX } from 'prefixly-formatter';

    const formattedNumber = prefX(12345.6789, 2);
    console.log(formattedNumber); // Outputs: "12.35K"
    ```

- **Improvements**:
  - Enhanced precision handling in the number conversion and rounding functions for accurate formatting.

- **Changes**:
  - Updated formatting logic to handle large numbers using thousands (`K`) with optional decimal precision.
