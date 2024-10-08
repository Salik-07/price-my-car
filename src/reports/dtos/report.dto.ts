import { Expose, Transform } from 'class-transformer';
import { Users } from '../../users/users.entity';

export class ReportDTO {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  approved: boolean;

  @Expose()
  model: string;

  @Expose()
  year: number;

  @Expose()
  mileage: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  price: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
