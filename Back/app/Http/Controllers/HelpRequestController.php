<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\HelpRequest;

class HelpRequestController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'user_id' => 'required|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $helpRequest = HelpRequest::create([
            'subject' => $request->subject,
            'message' => $request->message,
            'user_id' => $request->user_id
        ]);

        return response()->json($helpRequest, 201);
    }

    public function index()
    {
        $helpRequests = HelpRequest::with('user')->get();
        return response()->json($helpRequests);
    }

    public function show($id)
    {
        $helpRequest = HelpRequest::with('user')->find($id);

        if (!$helpRequest) {
            return response()->json(['error' => 'Help request not found'], 404);
        }

        return response()->json($helpRequest);
    }

    public function getHelpRequestsByUser($user_id)
    {
        $helpRequests = HelpRequest::where('user_id', $user_id)->with('user')->get();

        if ($helpRequests->isEmpty()) {
            return response()->json(['error' => 'No help requests found for this user'], 404);
        }

        return response()->json($helpRequests);
    }
}
