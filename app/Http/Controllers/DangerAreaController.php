<?php

namespace App\Http\Controllers;

class DangerAreaController extends Controller
{
    public function __invoke()
    {
        return inertia('settings/danger-area');
    }
}
