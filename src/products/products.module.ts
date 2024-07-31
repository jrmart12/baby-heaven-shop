import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities';
import { ProductImage } from './entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService, TypeOrmModule],
  imports: [
    TypeOrmModule.forFeature([
      // Product
      Product,
      ProductImage,
    ]),
  ],
})
export class ProductsModule {}
