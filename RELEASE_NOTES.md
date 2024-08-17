### Release Notes

#### Version 2.16.0 - 2024-08-17

**Updated Release**

- **Overview**:
  - Introduced `prefixly-formatter`, a module for formatting numbers with unit prefixes. This utility helps in representing large numbers more clearly by converting them into a readable format with optional decimal precision.

- **Features**:
  - **`prefx` Function**:
    - Formats numbers with unit prefixes and allows for optional decimal precision.
    - Example usage:
      ```typescript
      import { prefx } from 'prefixly-formatter';

      const formattedNumber = prefx(12345.6789, 2);
      console.log(formattedNumber); // Outputs: "12.34K"
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
  - Import and use the `prefx` function to format numbers. For example:
    ```typescript
    import { prefx } from 'prefixly-formatter';

    const formattedNumber = prefx(12345.6789, 2);
    console.log(formattedNumber); // Outputs: "12.34K"
    ```

- **Improvements**:
  - Enhanced precision handling in the number conversion and rounding functions for accurate formatting.

- **Changes**:
  - Updated formatting logic to handle large numbers using thousands (`K`), millions (`M`), billions (`M`) and many more with optional decimal precision.
