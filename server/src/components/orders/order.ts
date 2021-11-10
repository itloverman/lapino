import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../products/product';
import { IUser } from '../users/user';

const ObjectId = Schema.Types.ObjectId;

export interface IOrder extends Document {
  user: IUser['_id'];
  orderItems: [
    {
      productId: IProduct['_id'];
      quantity: number;
      pricing: {
        originalPrice: number;
        discountPercentage: number;
      };
      title: string;
      image: string;
    },
  ];
  shippingInfo: {
    city: string;
    phone: string;
    isPhoneValidated: boolean;
    address: string;
    zipCode: string;
  };
  paymentMethod: string;
  orderStatus: string;
  subTotal: number;
  total: string;
  shippingPrice: string;
  isPaid: boolean;
}

const orderSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: [
      {
        productId: { type: ObjectId, required: true, ref: 'Product' },
        quantity: { type: Number, required: true },
        pricing: {
          originalPrice: { type: Number, required: true },
          discountPercentage: Number,
        },
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    shippingInfo: {
      city: { type: String, required: true },
      phone: { type: String, required: true },
      isPhoneValidated: { type: Boolean, required: true },
      address: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    orderStatus: { type: String, required: true, enum: ['pending', 'on going', 'canceled', 'delivered'] },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

export default model<IOrder>('Order', orderSchema);
