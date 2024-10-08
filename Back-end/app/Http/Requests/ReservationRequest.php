<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'folio' => ['required', 'string', 'max:255'],
            'pc' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'digits_between:10,10'],
            'start' => ['required', 'date_format:H:i', 'after_or_equel:09:00', 'before_or_equel:18:00'],
            'end' => ['required', 'date_format:H:i', 'after_or_equel:start', 'before_or_equel:18:00'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El campo nombre es obligatorio',
            'last_name.required' => 'Agregue minimo un apellido',
            'folio.required' => 'El campo folio es obligatorio',
            'pc.required' => 'El campo pc es obligatorio',
            'phone.required' => 'El campo telefono es obligatorio',
            'start.required' => 'El campo fecha es obligatorio',
            'end.required' => 'El campo fecha es obligatorio',
        ];
    }
}
