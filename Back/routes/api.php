<?php

use App\Http\Controllers\guideController;
use App\Http\Controllers\HelpRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules\Password as RulesPassword;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;



/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('auth:sanctum')->get('/user', [userController::class, 'index']); //Returns a user using his email(switch to using his login token next time)


Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['error' => 'The provided credentials are incorrect.'], 401);
    }

    // Log the user in
    Auth::login($user);

    // Generate the token
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user,
    ]);
});

Route::post('/register', function (Request $request) {
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
        'password' => ['required', 'string', RulesPassword::defaults()],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;
    event(new Registered($user));

    return response()->json(
        ['token' => $token, 'user' => $user]
    );
});

Route::post('/logout', function (Request $request) {
    $user = $request->user();
    
    if (!$user) {
        return response()->json(['message' => 'User not authenticated.'], 401);
    }

    $token = $request->user()->currentAccessToken();
    
    if (!$token) {
        return response()->json(['message' => 'No active session found.'], 404);
    }

    $token->delete();
    
    return response()->json(['message' => 'Successfully logged out']);
});

Route::put('/profile', [UserController::class, 'updateProfile'])->name('profile.update');


// Guides

Route::prefix('guides')->group(function(){
    Route::get('/', [guideController::class, 'index']); // returns all guides
    Route::post('/', [guideController::class, 'store']); // Create a guide
    Route::delete('/{id}', [guideController::class, 'remove']); // Delete a guide using its id
    Route::get('/user/{user_id}', [guideController::class, 'findGuidesByUser']); // Returns all guides of a certain user
});

/*
Route::get('/guides', [guideController::class, 'index']); // returns all guides

Route::post('/guide', [guideController::class, 'store']); // Create a guide

Route::delete('/guides/{id}', [guideController::class, 'remove']); // Delete a guide using its id

Route::get('/user/{user_id}/guides', [guideController::class, 'findGuidesByUser']); // Returns all guides of a certain user
*/

// Help Requests

Route::prefix('help-requests')->group(function () {
    Route::post('/', [HelpRequestController::class, 'store']); // Create a help request
    Route::get('/', [HelpRequestController::class, 'index']); // Return all help requests
    Route::get('/{id}', [HelpRequestController::class, 'show']); // Returns a specific help request
    Route::get('/user/{user_id}', [HelpRequestController::class, 'getHelpRequestsByUser']); // Return help requests of a specific user
});

/*
Route::post('/help-requests', [HelpRequestController::class, 'store']); // Create a help request

Route::get('/help-requests', [HelpRequestController::class, 'index']); // Return all help requests

Route::get('/help-requests/{id}', [HelpRequestController::class, 'show']); // Returns a specific help request

Route::get('/users/{user_id}/help-requests', [HelpRequestController::class, 'getHelpRequestsByUser']); // Return help requests of a specific user
*/