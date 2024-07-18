<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\guide;
use Illuminate\Support\Facades\Validator;

class guideController extends Controller
{

    public function index(){ // Returns all guides
        $guides = Guide::all();
        return response()->json($guides);
    }

    public function store(Request $request)  // Create a guide
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'user_id' => 'required|exists:users,id' // If user doesn't exist (ID Invalid), it throws an error
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $guide = Guide::create([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => $request->user_id
        ]);

        return response()->json($guide, 201);
    }

    public function remove($id){  // Delete a guide using its id
        $guide = Guide::find($id);
        if (!$guide) {
            return response()->json(['error' => 'Guide not found'], 404);
        }
        $guide->delete();
        return response()->json(['message' => 'Guide deleted']);
    }

    public function findGuidesByUser($user_id){
        $guides = Guide::where('user_id', $user_id)->get(); // This returns only the guides of a user, unlike the one below that also returns the user
        //$guides = Guide::where('user_id', $user_id)->with('user')->get(); Use this if you want to get both the user and all of its guides
        if ($guides->isEmpty()){
            return response()->json(['error' => 'No guides found for this user'], 404);
        }
        return response()->json($guides);
    }
}
