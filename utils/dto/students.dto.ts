export interface Payment {
  cardNumber: string;
  cvcNumber: string;
  expireDate: [string, string];
}

export interface StudentDto {
  _id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  password: string;
  payment?: Payment;
  sessionsIDs?: string[];
  teachersIDs?: string[];
  centersIDs?: string[];
  parentsIDs?: string[];
  tokensIDs?: string[];
}
