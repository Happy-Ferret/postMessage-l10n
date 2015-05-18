postMessage peformance
======================

A collection of performance tests for using `window.postMessage` in the next 
iteration of the l20n.js API.

  1. Entires are created in the parent.  The view asks for each entry 
     individually.

  2. Entries are created in the parent.  The view asks once for all entries and 
     stores them locally.

  3. Only the raw AST is stored in the parent.  The view asks once for the AST 
     and creates entries out of it.
