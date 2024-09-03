import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reports } from './reports.entity';
import { CreateReportDTO } from './dtos/create-report.dto';

@Injectable()
export class ReportsService {
  create(reportDto: CreateReportDTO) {}
}
