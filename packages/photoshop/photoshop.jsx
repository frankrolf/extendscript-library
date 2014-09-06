﻿/*** Photoshop_library class* @class <b>Photoshop_library</b> a class of photoshop function </br>* these functions can be used with the class Picture tools and the method call_photoshop* @author Bastien Eichenberger**/Lib.Photoshop = function (my) {    my.open_image = function(obj) {        app.displayDialogs = DialogModes.NO;        var file_path = decodeURI(obj.file_path);        var img_file = new File(file_path);        var ps_doc = app.open(img_file);        app.displayDialogs = DialogModes.ALL;    }    /**     * function to open an image an save it in PSD file format     * @param {Object} obj a JSON object {file_path : path encoded with encodeURI}     * @return {String} new_file_path the new file path     **/    my.save_to_PSD = function(obj) {        app.displayDialogs = DialogModes.NO;        var file_path = decodeURI(obj.file_path);        psdSaveOption = new PhotoshopSaveOptions();        psdSaveOption.embedColorProfile = true;        app.activeDocument.saveAs(new File(file_path), psdSaveOption, true, Extension.LOWERCASE);        app.activeDocument.close();        app.displayDialogs = DialogModes.ALL;    }    my.save_to_TIFF = function(obj) {        app.displayDialogs = DialogModes.NO;        var file_path = decodeURI(obj.file_path);        tiffSaveOption = new TiffSaveOptions();        tiffSaveOption.embedColorProfile = true;        app.activeDocument.saveAs(new File(file_path), tiffSaveOption, true, Extension.LOWERCASE);        app.activeDocument.close();        app.displayDialogs = DialogModes.ALL;    }    my.resampling = function(obj) {        app.displayDialogs = DialogModes.NO;        app.preferences.rulerUnits = Units.MM;        var file_path = decodeURI(obj.file_path);        var horizontal_scale = obj.horizontal_scale;        var vertical_scale = obj.vertical_scale;        var resolution = obj.resolution;        var resample_method = obj.resample_method;        var doc_width = ps_doc.width * (horizontal_scale/100);        var doc_height = ps_doc.height * (vertical_scale/100);        app.activeDocument.resizeImage(doc_width, doc_height, resolution, resample_method);        app.activeDocument.save();        app.activeDocument.close();        app.displayDialogs = DialogModes.ALL;    }    my.get_resolution = function(obj) {        app.displayDialogs = DialogModes.NO;        app.preferences.rulerUnits = Units.MM;        var resolution = app.activeDocument.resolution;        app.activeDocument.close();        app.displayDialogs = DialogModes.ALL;        return resolution;    }    return my;}(Lib || {});