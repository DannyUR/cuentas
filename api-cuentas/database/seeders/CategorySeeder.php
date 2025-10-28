<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Salario', 'type' => 'ingreso', 'user_id' => 1]);
        Category::create(['name' => 'Comida', 'type' => 'gasto', 'user_id' => 1]);
    }
}
