postMessage peformance
======================

A collection of performance tests for using `window.postMessage` in the next 
iteration of the l20n.js API.


##postEachEntry

Entires are created in the parent.  The view asks for each entry individually.

##postAllEntries

Entries are created in the parent.  The view asks once for all entries and 
stores them locally.

##postAST

Only the raw AST is stored in the parent.  The view asks once for the AST and 
creates entries out of it.
