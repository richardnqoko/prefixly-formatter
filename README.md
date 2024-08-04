
# prefixly-formatter

`prefixly-formatter` is a utility module for formatting numbers with unit prefixes. It simplifies the representation of large numbers by converting them into a more readable format with optional decimal precision.

## Installation

To install `prefixly-formatter`, use npm:

```bash
npm install prefixly-formatter
```

## Usage

You can use `prefX` to format numbers with units like thousands. Here’s a quick example:

```typescript
import { prefX } from 'prefX';

const formattedNumber = prefX(12345.6789, 2);
console.log(formattedNumber); // Outputs: "12.35K"
```

## API

### `prefX(num: number, point?: number): string`

- **num**: The number to format.
- **point** (optional): The number of decimal places to include in the formatted output.

Returns a string representing the number with the appropriate unit prefix.

## Utility Functions

- **`convertNumber(num: number, unit: number, point?: number): number`**
  Converts the given number by dividing it with the specified unit and rounding it to the specified decimal points if provided.

- **`deciPoint(num: number, decimalPoint: number): number`**
  Rounds the number to the specified number of decimal points.

## Formatting Logic

The module includes built-in logic for formatting numbers in thousands (`K`). More units can be added as needed.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

MIT License. See [LICENSE](./LICENSE) for more details.