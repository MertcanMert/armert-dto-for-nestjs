import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Standard API response wrapper for a single item.
 */
export class ApiResponseDTO<T> {
    @ApiProperty({ example: true, description: 'Indicates if the request was successful' })
    success!: boolean;

    @ApiPropertyOptional({ description: 'The payload data' })
    data?: T;

    @ApiPropertyOptional({ example: 'Operation completed successfully', description: 'Optional message from the server' })
    message?: string;

    @ApiProperty({ example: '2025-01-01T12:00:00.000Z', description: 'ISO 8601 timestamp' })
    timestamp!: string;
}

/**
 * Standard structure for validation errors.
 */
export class ValidationErrorDTO {
    @ApiProperty({ example: 'email', description: 'The field that failed validation' })
    field!: string;

    @ApiProperty({ example: 'email must be an email', description: 'Human readable error message' })
    message!: string;

    @ApiPropertyOptional({ description: 'Raw validation constraints', example: { isEmail: 'email must be an email' } })
    constraints?: Record<string, string>;
}

/**
 * Standard API error response.
 */
export class ApiErrorDTO {
    @ApiProperty({ example: false, description: 'Always false for errors' })
    success: boolean = false;

    @ApiProperty({ example: 400, description: 'HTTP status code' })
    statusCode!: number;

    @ApiProperty({ example: 'Validation failed', description: 'Error message' })
    message!: string;

    @ApiPropertyOptional({ type: [ValidationErrorDTO], description: 'List of validation errors if applicable' })
    errors?: ValidationErrorDTO[];

    @ApiProperty({ example: '2025-01-01T12:00:00.000Z', description: 'TimeStamp of the error' })
    timestamp!: string;

    @ApiPropertyOptional({ example: '/api/v1/resource', description: 'Request path' })
    path?: string;
}

/**
 * Standard API response wrapper for lists without pagination metadata (simple lists).
 */
export class ApiListResponseDTO<T> {
    @ApiProperty({ example: true })
    success: boolean = true;

    @ApiProperty({ isArray: true, description: 'List of items' })
    data!: T[];

    @ApiProperty({ example: 10, description: 'Total count of items returned' })
    count!: number;

    @ApiProperty({ example: '2025-01-01T12:00:00.000Z' })
    timestamp!: string;
}
