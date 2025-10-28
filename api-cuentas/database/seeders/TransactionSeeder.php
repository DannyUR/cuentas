<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Transaction;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'ammount' => 5000,
            'type' => 'ingreso',
            'description' => 'Pago de salario',
            'user_id' => 1,
            'category_id' => 1,
            'account_id' => 1
        ]);
        Transaction::create([
            'ammount' => 300,
            'type' => 'gasto',
            'description' => 'Cena en restaurante',
            'user_id' => 1,
            'category_id' => 2,
            'account_id' => 1
        ]);
    }
}
