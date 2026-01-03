import { IsBoolean } from 'class-validator';

export class UpdateProductStatusDTO {
    @IsBoolean()
    isActive!: boolean;
}
