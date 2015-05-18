---
title: postMessage performance
author: Staś Małolepszy
---

postMessage performance
=======================

A collection of performance tests for using `window.postMessage` in the 
next iteration of the l20n.js API.

  - [postAST][]: Only the raw AST is stored in the parent.  The view 
  asks once for the AST and creates entries out of it.

  - [postAllEntries][]: Entries are created in the parent.  The view 
  asks once for all entries and stores them locally.

  - [postEachEntry][]: Entries are created in the parent.  The view 
  asks for each entry individually.

  - [postFormattedEntity][]: Entries are created in the parent.  The 
  view asks for an resolved entity which is formatted in the parent.


[postFormattedEntity]: postFormattedEntity.html
[postEachEntry]: postEachEntry.html
[postAllEntries]: postAllEntries.html
[postAST]: postAST.html
