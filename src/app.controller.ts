import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, Cart, Product } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('/add')
  addToCart(@Body() id: number): Cart[] {
    return this.appService.addToCart(id);
  }

  @Post('/remove')
  removeFromCart(@Body() id: number): Cart[] {
    return this.appService.removeFromCart(id);
  }

  @Get('/cart')
  showAllProductsInCart(): Cart[] {
    return this.appService.showAllProductsInCart();
  }

  @Get('/products')
  showAllProducts(): Product[] {
    return this.appService.getAllProducts();
  }

  @Get('/total')
  getTotal(): number {
    return this.appService.getTotal();
  }
}
