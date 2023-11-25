import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import Swal from 'sweetalert2';

interface jsPDFWithPlugin extends jspdf.jsPDF {
  autoTable: (options: UserOptions) => jspdf.jsPDF;
}

@Component({
  selector: 'app-reservation-accept-page',
  templateUrl: './reservation-accept-page.component.html',
  styleUrls: ['./reservation-accept-page.component.css']
})
export class ReservationAcceptPageComponent {
  room: any;

  constructor(private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRouter.queryParams.subscribe(params => {
      this.room = JSON.parse(params['data']);
    });
    Swal.fire({
      title: 'Hola!',
      text: 'Cuéntanos cómo fue tu experiencia:',
      input: 'text',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        console.log('Result: ' + result.value);
      }
    });
  }

  generarPDF() {
    const doc = new jspdf.jsPDF('landscape', 'px', 'a4') as jsPDFWithPlugin;

    const tableData = [
      ['Reservación realizada con éxito', 'Usuario'],
      ['Nombre', this.room.nombre_Cliente],
      ['Apellidos', this.room.apellidos_Cliente],
      ['Habitación', this.room.fK_Habitacion],
      ['Fecha de transacción', this.room.fecha_Transaccion],
      ['Fecha de inicio', this.room.fecha_Inicio],
      ['Fecha de fin', this.room.fecha_Fin],
      ['Tarifa total', this.room.tarifa_Total],
      [''],
      [''],
      ['¡Esperamos que disfrute su estadía!'],
      ['¡Gracias por preferirnos!'],
      ['Hotel 5 Rosas']
    ]

    doc.autoTable({
      didDrawPage: function (data: any) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.text('¡Reserva realizada!', data.settings.margin.left, 20);
      },
      head: tableData.slice(0, 1), // Obtener solo la fila de encabezado
      body: tableData.slice(1), // Obtener las filas de datos
    });

    doc.save('confirmacion_reserva.pdf');

  }


}
