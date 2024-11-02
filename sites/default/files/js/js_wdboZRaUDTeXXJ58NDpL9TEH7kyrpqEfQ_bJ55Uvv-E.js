/*
 * Copyright 2015 Jeff Gauthier <code at bogue.ca>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


(function ($) {

  Drupal.behaviors.navbar = {
    attach: function(context, settings) {
      $("#menu").mmenu({
            extensions: [
              "position-right",
              "position-front",
              // "pagedim-black",
              "theme-dark"
            ],
            navbar:{
              titleLink: "none"
            }
         }, {
         // configuration
         offCanvas: {
            pageSelector: "#page"
         },
         classNames: {
            selected: "active"
         }
      });
      $('.mm-listview > .mm-listitem > a').click(function (e) {
        var href = $(e.target).prev().attr('href');
        if(href){
          e.preventDefault();
          $(e.target).prev().trigger('click');
        }
      });
    }
  };


})(jQuery);
;
