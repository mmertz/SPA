<?php

use Faker\Generator as Faker;
use App\Model\Category;

$factory->define(App\Model\Category::class, function (Faker $faker) {
    $word = $faker->word;
    return [
        'name' => $word,
        'slug' => str_slug($word),
    ];
});
