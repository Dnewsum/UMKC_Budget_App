export type BudgetStatus = 'bad' | 'medium' | 'good';

export function getBudgetStatus(userBudget: number, budgetLimit: number): BudgetStatus {
  const ratio = userBudget / budgetLimit;
  if (ratio <= 0.5) return 'good';
  if (ratio <= 0.85) return 'medium';
  return 'bad';
}

export function getAuraGradient(status: BudgetStatus): string {
  const gradients = {
    bad: 'bg-gradient-to-br from-red-500 via-red-600 to-red-700',
    medium: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600',
    good: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
  };

  return gradients[status];
}
