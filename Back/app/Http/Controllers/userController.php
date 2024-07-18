<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        // Retrieve the user based on the provided email
        $user = User::where('email', $request->input('email'))->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user);
    }
    
    public function updateProfile(Request $request)
    {
        $request->validate([
            'age' => 'nullable|integer',
            'bio' => 'nullable|string',
        ]);

        $user = auth()->user();

        // Ensure $user is an instance of User
        if ($user instanceof User) {
            $user->update($request->only('age', 'bio'));
            return redirect()->back()->with('success', 'Profile updated successfully.');
        }

        return redirect()->back()->withErrors('User not found or not authenticated.');
    }
}
