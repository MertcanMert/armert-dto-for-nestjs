import { IsString, Matches, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Localized text DTO for multi-language support
 * Supports ISO 639-1 language codes with optional country codes
 * Examples: 'tr', 'en', 'tr-TR', 'en-US', 'de-DE'
 */
export class LocalizedTextDTO {
    @ApiProperty({
        description: 'ISO Locale Code',
        example: 'en-US',
    })
    @IsString()
    @Matches(/^[a-z]{2}(-[A-Z]{2})?$/, {
        message: 'Locale must be in ISO format (e.g., tr, en, tr-TR, en-US)',
    })
    locale!: string;

    @ApiProperty({
        description: 'Localized Value',
        example: 'Blue T-Shirt',
    })
    @IsString()
    @MinLength(1, { message: 'Value cannot be empty' })
    value!: string;
}
