<?php

namespace App\Http\Controllers;

use App\Models\App;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Resources\AppCollection;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Inertia\Response
     */
    public function index(): Response
    {
        // return Inertia::render(
        //     'App/Index', 
        //     ['user' => ['name' => 'moussa']]
        // );
        
        return Inertia::render('App/Index', [
            'apps' => App::all(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function welcome(): Response
    {
        return Inertia::render(
            'App/Index',
            []
            // ['user' => ['name' => 'moussa']]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('App/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => ['required', 'string', 'min:3'],
            'type'      => ['required', 'string', 'min:3'],
            'status'    => ['required', 'string', 'min:3'],
        ]);

        $user = App::create([
            'name' => $request->name,
            'type' => $request->type,
            'status' => $request->status,
            'customer_id' => 'xxx-xx-xx-x'
        ]);

        return redirect('/app');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\App  $app
     * @return \Illuminate\Http\Response
     */
    public function show(App $app)
    {
        return view('App/Index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\App  $app
     * @return \Illuminate\Http\Response
     */
    public function edit(App $app)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\App  $app
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, App $app)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\App  $app
     * @return \Illuminate\Http\Response
     */
    public function destroy(App $app)
    {
        //
    }
}
