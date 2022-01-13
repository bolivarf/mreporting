/**
 * -------------------------------------------------------------------------
 * Mreporting plugin for GLPI
 * Copyright (C) 2003-2022 by the Mreporting Development Team.
 *
 * https://github.com/pluginsGLPI/mreporting
 * -------------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of Mreporting.
 *
 * Mreporting is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Mreporting is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Mreporting. If not, see <http://www.gnu.org/licenses/>.
 * --------------------------------------------------------------------------
 */

$( document ).ready(function() {
   var urlAjax = CFG_GLPI.root_doc+"/"+GLPI_PLUGINS_PATH.mreporting+"/ajax/homepage_link.php";
   $.post( urlAjax, function( data ) {
      $('#c_menu #menu').append( data );
   });
});
