cedula6 = () => {
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: false,
        floatPrecision: 16 // or "smart", default is 16
    });
    // Optional - set properties on the document
    doc.setProperties({
        title: 'CEDULA_6 '+nombres_Personal +" "+ aPaterno_Personal + " " + aMaterno_Personal,
        subject: 'Cedula_6',
        author: 'VIVEVOLANDO',
        creator: 'Christopher S.'
    });
    //doc.text("Hello world!", 10, 10);
   
    doc.addImage(pagina_1, 0, 0, 215.9, 279.4);

    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal,29,218);
    doc.text(RFC_Personal,135,218);
    doc.text(CURP_Personal,38,225.5);
    doc.text(lugarNacimiento_Personal,138,225.5);
    doc.text(nacionalidad_Personal,36.5,232.5);
    

    //Página 2//
    doc.addPage("letter", "p");
    doc.addImage(pagina_2, 0, 0, 215.9, 279.4);

    doc.text(cp_Personal,37.6,65.7);
    doc.text(calle_Personal,119,65.7);
    doc.text(noExt_Personal,40,73);
    doc.text(noInt_Personal,86,73);
    doc.text(colonia_Personal,133,73);
    doc.text(cd_Personal,41.8,80);
    doc.text(mun_Personal,137,80);
    doc.text(entfed_Personal,42.7,87);
    doc.text(noCartilla_Personal,52.7,100.8);
    if (fechaLiberacion_Personal != '') {
        doc.text(diaLiberacion_Personal, 138.5, 100.8);
        doc.text(MesLiberacion_Personal, 161.5, 100.8);
        doc.text(yearLiberacion_Personal, 183, 100.8);
    }
    doc.text(observacionesCartilla_Personal,53,108.3);
    doc.text(edoCivil_Personal,127.5,108.3);
    doc.text(tel_Personal,31,115.3);

    doc.text(nombEsc_Primaria,30,208);
    doc.text(deEsc_Primaria,116,208);
    doc.text(aEsc_Primaria,145,208);
    doc.text(certEsc_Primaria,188,208);

    doc.text(nombEsc_Secundaria,33.5,215);
    doc.text(deEsc_Secundaria,116,215);
    doc.text(aEsc_Secundaria,145,215);
    doc.text(certEsc_Secundaria,188,215);

    doc.text(nombEsc_Preparatoria,34.5,222);
    doc.text(deEsc_Preparatoria,116,222);
    doc.text(aEsc_Preparatoria,145,222);
    doc.text(certEsc_Preparatoria,188,222);

    doc.text(nombEsc_Superiores,44,229);
    doc.text(deEsc_Superiores,116,229);
    doc.text(aEsc_Superiores,145,229);
    doc.text(certEsc_Superiores,188,229);


    //Página 3//
    doc.addPage("letter", "p");
    doc.addImage(pagina_3, 0, 0, 215.9, 279.4);

    doc.text(nombres_Acc + " " + aPaterno_Acc + " " + aMaterno_Acc,30.3,65.8);
    doc.text(tel_Acc,123,65.8);
    doc.text(cp_Acc,37,72.8);
    doc.text(calle_Acc,119,72.8);
    doc.text(noExt_Acc,39.6,80);
    doc.text(noInt_Acc,86,80);
    doc.text(colonia_Acc,135.7,80);
    doc.text(cd_Acc,42,87);
    doc.text(mun_Acc,136.7,87);
    doc.text(entfed_Acc,42.8,94);

    textWidth = doc.getTextWidth(nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal); // obtener el ancho del texto
    docWidth = doc.internal.pageSize.getWidth();
    textX = (docWidth - textWidth) / 2;
    doc.text(nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal,textX,194);

    window.open(doc.output('bloburl'));
    
}
