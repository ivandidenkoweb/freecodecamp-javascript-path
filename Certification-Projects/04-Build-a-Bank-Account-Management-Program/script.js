class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(sum) {
    if (sum > 0) {
      this.transactions.push({ type: "deposit", amount: sum });
      this.balance += sum;
      return `Successfully deposited $${sum}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }

  withdraw(sum) {
    if (sum > 0 && sum <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: sum });
      this.balance -= sum;
      return `Successfully withdrew $${sum}. New balance: $${this.balance}`;
    } else {
      return `Insufficient balance or invalid amount.`;
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const depositAmounts = this.transactions
      .filter((transaction) => transaction.type === "deposit")
      .map((transaction) => transaction.amount);

    return `Deposits: ${depositAmounts.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawAmounts = this.transactions
      .filter((transaction) => transaction.type === "withdraw")
      .map((transaction) => transaction.amount);

    return `Withdrawals: ${withdrawAmounts.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(100);
myAccount.deposit(150);
myAccount.withdraw(100);
myAccount.withdraw(150);
myAccount.deposit(150);
console.log(myAccount.checkBalance());
