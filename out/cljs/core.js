goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____2474 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2474))
{return or__3576__auto____2474;
} else
{var or__3576__auto____2475 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2475))
{return or__3576__auto____2475;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2476 = coll;

if(cljs.core.truth_(and__3574__auto____2476))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2476;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2477 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2477))
{return or__3576__auto____2477;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2478 = coll;

if(cljs.core.truth_(and__3574__auto____2478))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2478;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2479 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2479))
{return or__3576__auto____2479;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2480 = coll;

if(cljs.core.truth_(and__3574__auto____2480))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2480;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2481 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2481))
{return or__3576__auto____2481;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2486 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2482 = coll;

if(cljs.core.truth_(and__3574__auto____2482))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2482;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2483 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2483))
{return or__3576__auto____2483;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__2487 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2484 = coll;

if(cljs.core.truth_(and__3574__auto____2484))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2484;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2485 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2485))
{return or__3576__auto____2485;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2486.call(this,coll,n);
case  3 :
return _nth__2487.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2489 = coll;

if(cljs.core.truth_(and__3574__auto____2489))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2489;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2490 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2490))
{return or__3576__auto____2490;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2491 = coll;

if(cljs.core.truth_(and__3574__auto____2491))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2491;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2492 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2492))
{return or__3576__auto____2492;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2497 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2493 = o;

if(cljs.core.truth_(and__3574__auto____2493))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2493;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2494 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2494))
{return or__3576__auto____2494;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__2498 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2495 = o;

if(cljs.core.truth_(and__3574__auto____2495))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2495;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2496 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2496))
{return or__3576__auto____2496;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2497.call(this,o,k);
case  3 :
return _lookup__2498.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2500 = coll;

if(cljs.core.truth_(and__3574__auto____2500))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2500;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2501 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2501))
{return or__3576__auto____2501;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2502 = coll;

if(cljs.core.truth_(and__3574__auto____2502))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2502;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2503 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2503))
{return or__3576__auto____2503;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2504 = coll;

if(cljs.core.truth_(and__3574__auto____2504))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2504;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2505 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2505))
{return or__3576__auto____2505;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2506 = coll;

if(cljs.core.truth_(and__3574__auto____2506))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2506;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2507 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2507))
{return or__3576__auto____2507;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2508 = coll;

if(cljs.core.truth_(and__3574__auto____2508))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2508;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2509 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2509))
{return or__3576__auto____2509;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2510 = coll;

if(cljs.core.truth_(and__3574__auto____2510))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2510;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2511 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2511))
{return or__3576__auto____2511;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2512 = coll;

if(cljs.core.truth_(and__3574__auto____2512))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2512;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2513 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2513))
{return or__3576__auto____2513;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2514 = o;

if(cljs.core.truth_(and__3574__auto____2514))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2514;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2515 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2515))
{return or__3576__auto____2515;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2516 = o;

if(cljs.core.truth_(and__3574__auto____2516))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2516;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2517 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2517))
{return or__3576__auto____2517;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2518 = o;

if(cljs.core.truth_(and__3574__auto____2518))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2518;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2519 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2519))
{return or__3576__auto____2519;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2520 = o;

if(cljs.core.truth_(and__3574__auto____2520))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2520;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2521 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2521))
{return or__3576__auto____2521;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2526 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2522 = coll;

if(cljs.core.truth_(and__3574__auto____2522))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2522;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2523 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2523))
{return or__3576__auto____2523;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2527 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2524 = coll;

if(cljs.core.truth_(and__3574__auto____2524))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2524;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2525 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2525))
{return or__3576__auto____2525;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2526.call(this,coll,f);
case  3 :
return _reduce__2527.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2529 = o;

if(cljs.core.truth_(and__3574__auto____2529))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2529;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2530 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2530))
{return or__3576__auto____2530;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2531 = o;

if(cljs.core.truth_(and__3574__auto____2531))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2531;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2532 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2532))
{return or__3576__auto____2532;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2533 = o;

if(cljs.core.truth_(and__3574__auto____2533))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2533;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2534 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2534))
{return or__3576__auto____2534;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2535 = o;

if(cljs.core.truth_(and__3574__auto____2535))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2535;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2536 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2536))
{return or__3576__auto____2536;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2537 = d;

if(cljs.core.truth_(and__3574__auto____2537))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2537;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2538 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2538))
{return or__3576__auto____2538;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2539 = null;
var G__2539__2540 = (function (_,n){
return null;
});
var G__2539__2541 = (function (_,n,not_found){
return not_found;
});
G__2539 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2539__2540.call(this,_,n);
case  3 :
return G__2539__2541.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2539;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2543 = null;
var G__2543__2544 = (function (_,f){
return f.call(null);
});
var G__2543__2545 = (function (_,f,start){
return start;
});
G__2543 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2543__2544.call(this,_,f);
case  3 :
return G__2543__2545.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2543;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2547 = null;
var G__2547__2548 = (function (o,k){
return null;
});
var G__2547__2549 = (function (o,k,not_found){
return not_found;
});
G__2547 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2547__2548.call(this,o,k);
case  3 :
return G__2547__2549.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2547;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2557 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2551 = cljs.core._nth.call(null,cicoll,0);
var n__2552 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2552,cljs.core._count.call(null,cicoll))))
{{
var G__2561 = f.call(null,val__2551,cljs.core._nth.call(null,cicoll,n__2552));
var G__2562 = cljs.core.inc.call(null,n__2552);
val__2551 = G__2561;
n__2552 = G__2562;
continue;
}
} else
{return val__2551;
}
break;
}
}
});
var ci_reduce__2558 = (function (cicoll,f,val){
var val__2553 = val;
var n__2554 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2554,cljs.core._count.call(null,cicoll))))
{{
var G__2563 = f.call(null,val__2553,cljs.core._nth.call(null,cicoll,n__2554));
var G__2564 = cljs.core.inc.call(null,n__2554);
val__2553 = G__2563;
n__2554 = G__2564;
continue;
}
} else
{return val__2553;
}
break;
}
});
var ci_reduce__2559 = (function (cicoll,f,val,idx){
var val__2555 = val;
var n__2556 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2556,cljs.core._count.call(null,cicoll))))
{{
var G__2565 = f.call(null,val__2555,cljs.core._nth.call(null,cicoll,n__2556));
var G__2566 = cljs.core.inc.call(null,n__2556);
val__2555 = G__2565;
n__2556 = G__2566;
continue;
}
} else
{return val__2555;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2557.call(this,cicoll,f);
case  3 :
return ci_reduce__2558.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2559.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2573 = null;
var G__2573__2574 = (function (_,f){
var this__2567 = this;
return cljs.core.ci_reduce.call(null,this__2567.a,f,(this__2567.a[this__2567.i]),cljs.core.inc.call(null,this__2567.i));
});
var G__2573__2575 = (function (_,f,start){
var this__2568 = this;
return cljs.core.ci_reduce.call(null,this__2568.a,f,start,this__2568.i);
});
G__2573 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2573__2574.call(this,_,f);
case  3 :
return G__2573__2575.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2573;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2569 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2570 = this;
return (this__2570.a[this__2570.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2571 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2571.i),cljs.core._count.call(null,this__2571.a))))
{return (new cljs.core.IndexedSeq(this__2571.a,cljs.core.inc.call(null,this__2571.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2572 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2577 = null;
var G__2577__2578 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2577__2579 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2577 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2577__2578.call(this,array,f);
case  3 :
return G__2577__2579.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2577;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2581 = null;
var G__2581__2582 = (function (array,k){
return (array[k]);
});
var G__2581__2583 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2581 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2581__2582.call(this,array,k);
case  3 :
return G__2581__2583.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2581;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2585 = null;
var G__2585__2586 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2585__2587 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2585 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2585__2586.call(this,array,n);
case  3 :
return G__2585__2587.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2585;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2589))
{var s__2590 = temp__3726__auto____2589;

return cljs.core._first.call(null,s__2590);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2591 = cljs.core.next.call(null,s);
s = G__2591;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2592 = cljs.core.seq.call(null,x);
var n__2593 = 0;

while(true){
if(cljs.core.truth_(s__2592))
{{
var G__2594 = cljs.core.next.call(null,s__2592);
var G__2595 = cljs.core.inc.call(null,n__2593);
s__2592 = G__2594;
n__2593 = G__2595;
continue;
}
} else
{return n__2593;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2596 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2597 = (function (coll,x,var_args){
var xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(xs))
{{
var G__2599 = conj.call(null,coll,x);
var G__2600 = cljs.core.first.call(null,xs);
var G__2601 = cljs.core.next.call(null,xs);
coll = G__2599;
x = G__2600;
xs = G__2601;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
});
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2596.call(this,coll,x);
default:
return conj__2597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = (function (arglist__2602){
var coll = cljs.core.first(arglist__2602);
var x = cljs.core.first(cljs.core.next(arglist__2602));
var xs = cljs.core.rest(cljs.core.next(arglist__2602));
return conj__2597.call(null, coll, x, xs);
});
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2603 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2604 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2603.call(this,coll,n);
case  3 :
return nth__2604.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2606 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2607 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2606.call(this,o,k);
case  3 :
return get__2607.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2610 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2611 = (function (coll,k,v,var_args){
var kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
while(true){
var ret__2609 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2613 = ret__2609;
var G__2614 = cljs.core.first.call(null,kvs);
var G__2615 = cljs.core.second.call(null,kvs);
var G__2616 = cljs.core.nnext.call(null,kvs);
coll = G__2613;
k = G__2614;
v = G__2615;
kvs = G__2616;
continue;
}
} else
{return ret__2609;
}
break;
}
});
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2610.call(this,coll,k,v);
default:
return assoc__2611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = (function (arglist__2617){
var coll = cljs.core.first(arglist__2617);
var k = cljs.core.first(cljs.core.next(arglist__2617));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2617)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2617)));
return assoc__2611.call(null, coll, k, v, kvs);
});
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2619 = (function (coll){
return coll;
});
var dissoc__2620 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2621 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2618 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2623 = ret__2618;
var G__2624 = cljs.core.first.call(null,ks);
var G__2625 = cljs.core.next.call(null,ks);
coll = G__2623;
k = G__2624;
ks = G__2625;
continue;
}
} else
{return ret__2618;
}
break;
}
});
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2619.call(this,coll);
case  2 :
return dissoc__2620.call(this,coll,k);
default:
return dissoc__2621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = (function (arglist__2626){
var coll = cljs.core.first(arglist__2626);
var k = cljs.core.first(cljs.core.next(arglist__2626));
var ks = cljs.core.rest(cljs.core.next(arglist__2626));
return dissoc__2621.call(null, coll, k, ks);
});
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
return cljs.core._meta.call(null,o);
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2628 = (function (coll){
return coll;
});
var disj__2629 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2630 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2627 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2632 = ret__2627;
var G__2633 = cljs.core.first.call(null,ks);
var G__2634 = cljs.core.next.call(null,ks);
coll = G__2632;
k = G__2633;
ks = G__2634;
continue;
}
} else
{return ret__2627;
}
break;
}
});
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2628.call(this,coll);
case  2 :
return disj__2629.call(this,coll,k);
default:
return disj__2630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = (function (arglist__2635){
var coll = cljs.core.first(arglist__2635);
var k = cljs.core.first(cljs.core.next(arglist__2635));
var ks = cljs.core.rest(cljs.core.next(arglist__2635));
return disj__2630.call(null, coll, k, ks);
});
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2636 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2637 = x__105__auto____2636;

if(cljs.core.truth_(and__3574__auto____2637))
{return x__105__auto____2636.cljs$core$ICollection$;
} else
{return and__3574__auto____2637;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2636);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2638 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2639 = x__105__auto____2638;

if(cljs.core.truth_(and__3574__auto____2639))
{return x__105__auto____2638.cljs$core$ISet$;
} else
{return and__3574__auto____2639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2638);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2640 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2641 = x__105__auto____2640;

if(cljs.core.truth_(and__3574__auto____2641))
{return x__105__auto____2640.cljs$core$IAssociative$;
} else
{return and__3574__auto____2641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2640);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2642 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2643 = x__105__auto____2642;

if(cljs.core.truth_(and__3574__auto____2643))
{return x__105__auto____2642.cljs$core$ISequential$;
} else
{return and__3574__auto____2643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2642);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2644 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2645 = x__105__auto____2644;

if(cljs.core.truth_(and__3574__auto____2645))
{return x__105__auto____2644.cljs$core$ICounted$;
} else
{return and__3574__auto____2645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2644);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2646 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2647 = x__105__auto____2646;

if(cljs.core.truth_(and__3574__auto____2647))
{return x__105__auto____2646.cljs$core$IMap$;
} else
{return and__3574__auto____2647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2646);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2648 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2649 = x__105__auto____2648;

if(cljs.core.truth_(and__3574__auto____2649))
{return x__105__auto____2648.cljs$core$IVector$;
} else
{return and__3574__auto____2649;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2648);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2650 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2650.push(key);
}));
return keys__2650;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2651 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2652 = x__105__auto____2651;

if(cljs.core.truth_(and__3574__auto____2652))
{return x__105__auto____2651.cljs$core$ISeq$;
} else
{return and__3574__auto____2652;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2651);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2653 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2653))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2654 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2654))
{return or__3576__auto____2654;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2653;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2655 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2655))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2655;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2656 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2656))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2656;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2657 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2657))
{return (n == n.toFixed());
} else
{return and__3574__auto____2657;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2658 = coll;

if(cljs.core.truth_(and__3574__auto____2658))
{var and__3574__auto____2659 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2659))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2659;
}
} else
{return and__3574__auto____2658;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2664 = (function (x){
return true;
});
var distinct_QMARK___2665 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2666 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2660 = cljs.core.set([y,x]);
var xs__2661 = more;

while(true){
var x__2662 = cljs.core.first.call(null,xs__2661);
var etc__2663 = cljs.core.next.call(null,xs__2661);

if(cljs.core.truth_(xs__2661))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2660,x__2662)))
{return false;
} else
{{
var G__2668 = cljs.core.conj.call(null,s__2660,x__2662);
var G__2669 = etc__2663;
s__2660 = G__2668;
xs__2661 = G__2669;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
});
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2664.call(this,x);
case  2 :
return distinct_QMARK___2665.call(this,x,y);
default:
return distinct_QMARK___2666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = (function (arglist__2670){
var x = cljs.core.first(arglist__2670);
var y = cljs.core.first(cljs.core.next(arglist__2670));
var more = cljs.core.rest(cljs.core.next(arglist__2670));
return distinct_QMARK___2666.call(null, x, y, more);
});
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2671 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2671)))
{return r__2671;
} else
{if(cljs.core.truth_(r__2671))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2673 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2674 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2672 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2672,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2672);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2673.call(this,comp);
case  2 :
return sort__2674.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2676 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2677 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2676.call(this,keyfn,comp);
case  3 :
return sort_by__2677.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2679 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2680 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2679.call(this,f,val);
case  3 :
return reduce__2680.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2686 = (function (f,coll){
var temp__3723__auto____2682 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2682))
{var s__2683 = temp__3723__auto____2682;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2683),cljs.core.next.call(null,s__2683));
} else
{return f.call(null);
}
});
var seq_reduce__2687 = (function (f,val,coll){
var val__2684 = val;
var coll__2685 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2685))
{{
var G__2689 = f.call(null,val__2684,cljs.core.first.call(null,coll__2685));
var G__2690 = cljs.core.next.call(null,coll__2685);
val__2684 = G__2689;
coll__2685 = G__2690;
continue;
}
} else
{return val__2684;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2686.call(this,f,val);
case  3 :
return seq_reduce__2687.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2691 = null;
var G__2691__2692 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2691__2693 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2691 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2691__2692.call(this,coll,f);
case  3 :
return G__2691__2693.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2691;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2695 = (function (){
return 0;
});
var _PLUS___2696 = (function (x){
return x;
});
var _PLUS___2697 = (function (x,y){
return (x + y);
});
var _PLUS___2698 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
});
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2695.call(this);
case  1 :
return _PLUS___2696.call(this,x);
case  2 :
return _PLUS___2697.call(this,x,y);
default:
return _PLUS___2698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = (function (arglist__2700){
var x = cljs.core.first(arglist__2700);
var y = cljs.core.first(cljs.core.next(arglist__2700));
var more = cljs.core.rest(cljs.core.next(arglist__2700));
return _PLUS___2698.call(null, x, y, more);
});
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2701 = (function (x){
return (- x);
});
var ___2702 = (function (x,y){
return (x - y);
});
var ___2703 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
});
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2701.call(this,x);
case  2 :
return ___2702.call(this,x,y);
default:
return ___2703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = (function (arglist__2705){
var x = cljs.core.first(arglist__2705);
var y = cljs.core.first(cljs.core.next(arglist__2705));
var more = cljs.core.rest(cljs.core.next(arglist__2705));
return ___2703.call(null, x, y, more);
});
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2706 = (function (){
return 1;
});
var _STAR___2707 = (function (x){
return x;
});
var _STAR___2708 = (function (x,y){
return (x * y);
});
var _STAR___2709 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
});
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2706.call(this);
case  1 :
return _STAR___2707.call(this,x);
case  2 :
return _STAR___2708.call(this,x,y);
default:
return _STAR___2709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = (function (arglist__2711){
var x = cljs.core.first(arglist__2711);
var y = cljs.core.first(cljs.core.next(arglist__2711));
var more = cljs.core.rest(cljs.core.next(arglist__2711));
return _STAR___2709.call(null, x, y, more);
});
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2712 = (function (x){
return (1 / x);
});
var _SLASH___2713 = (function (x,y){
return (x / y);
});
var _SLASH___2714 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
});
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2712.call(this,x);
case  2 :
return _SLASH___2713.call(this,x,y);
default:
return _SLASH___2714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = (function (arglist__2716){
var x = cljs.core.first(arglist__2716);
var y = cljs.core.first(cljs.core.next(arglist__2716));
var more = cljs.core.rest(cljs.core.next(arglist__2716));
return _SLASH___2714.call(null, x, y, more);
});
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2717 = (function (x){
return true;
});
var _LT___2718 = (function (x,y){
return (x < y);
});
var _LT___2719 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2721 = y;
var G__2722 = cljs.core.first.call(null,more);
var G__2723 = cljs.core.next.call(null,more);
x = G__2721;
y = G__2722;
more = G__2723;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2717.call(this,x);
case  2 :
return _LT___2718.call(this,x,y);
default:
return _LT___2719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = (function (arglist__2724){
var x = cljs.core.first(arglist__2724);
var y = cljs.core.first(cljs.core.next(arglist__2724));
var more = cljs.core.rest(cljs.core.next(arglist__2724));
return _LT___2719.call(null, x, y, more);
});
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2725 = (function (x){
return true;
});
var _LT__EQ___2726 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2727 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2729 = y;
var G__2730 = cljs.core.first.call(null,more);
var G__2731 = cljs.core.next.call(null,more);
x = G__2729;
y = G__2730;
more = G__2731;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2725.call(this,x);
case  2 :
return _LT__EQ___2726.call(this,x,y);
default:
return _LT__EQ___2727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__2732){
var x = cljs.core.first(arglist__2732);
var y = cljs.core.first(cljs.core.next(arglist__2732));
var more = cljs.core.rest(cljs.core.next(arglist__2732));
return _LT__EQ___2727.call(null, x, y, more);
});
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2733 = (function (x){
return true;
});
var _GT___2734 = (function (x,y){
return (x > y);
});
var _GT___2735 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2737 = y;
var G__2738 = cljs.core.first.call(null,more);
var G__2739 = cljs.core.next.call(null,more);
x = G__2737;
y = G__2738;
more = G__2739;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2733.call(this,x);
case  2 :
return _GT___2734.call(this,x,y);
default:
return _GT___2735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = (function (arglist__2740){
var x = cljs.core.first(arglist__2740);
var y = cljs.core.first(cljs.core.next(arglist__2740));
var more = cljs.core.rest(cljs.core.next(arglist__2740));
return _GT___2735.call(null, x, y, more);
});
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2741 = (function (x){
return true;
});
var _GT__EQ___2742 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2743 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2745 = y;
var G__2746 = cljs.core.first.call(null,more);
var G__2747 = cljs.core.next.call(null,more);
x = G__2745;
y = G__2746;
more = G__2747;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2741.call(this,x);
case  2 :
return _GT__EQ___2742.call(this,x,y);
default:
return _GT__EQ___2743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__2748){
var x = cljs.core.first(arglist__2748);
var y = cljs.core.first(cljs.core.next(arglist__2748));
var more = cljs.core.rest(cljs.core.next(arglist__2748));
return _GT__EQ___2743.call(null, x, y, more);
});
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2749 = (function (x){
return x;
});
var max__2750 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2751 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
});
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2749.call(this,x);
case  2 :
return max__2750.call(this,x,y);
default:
return max__2751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var more = cljs.core.rest(cljs.core.next(arglist__2753));
return max__2751.call(null, x, y, more);
});
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2754 = (function (x){
return x;
});
var min__2755 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2756 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
});
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2754.call(this,x);
case  2 :
return min__2755.call(this,x,y);
default:
return min__2756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var more = cljs.core.rest(cljs.core.next(arglist__2758));
return min__2756.call(null, x, y, more);
});
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return (Math.floor(q));
} else
{return (Math.ceil(q));
}
});
cljs.core.mod = (function mod(n,d){
return (n % d);
});
cljs.core.quot = (function quot(n,d){
var rem__2759 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2759) / d));
});
cljs.core.rem = (function rem(n,d){
var q__2760 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2760));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2761 = (function (x){
return true;
});
var _EQ__EQ___2762 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2763 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2765 = y;
var G__2766 = cljs.core.first.call(null,more);
var G__2767 = cljs.core.next.call(null,more);
x = G__2765;
y = G__2766;
more = G__2767;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2761.call(this,x);
case  2 :
return _EQ__EQ___2762.call(this,x,y);
default:
return _EQ__EQ___2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__2768){
var x = cljs.core.first(arglist__2768);
var y = cljs.core.first(cljs.core.next(arglist__2768));
var more = cljs.core.rest(cljs.core.next(arglist__2768));
return _EQ__EQ___2763.call(null, x, y, more);
});
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2769 = n;
var xs__2770 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2771 = xs__2770;

if(cljs.core.truth_(and__3574__auto____2771))
{return cljs.core.pos_QMARK_.call(null,n__2769);
} else
{return and__3574__auto____2771;
}
})()))
{{
var G__2772 = cljs.core.dec.call(null,n__2769);
var G__2773 = cljs.core.next.call(null,xs__2770);
n__2769 = G__2772;
xs__2770 = G__2773;
continue;
}
} else
{return xs__2770;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2778 = null;
var G__2778__2779 = (function (coll,n){
var temp__3723__auto____2774 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2774))
{var xs__2775 = temp__3723__auto____2774;

return cljs.core.first.call(null,xs__2775);
} else
{throw "Index out of bounds";
}
});
var G__2778__2780 = (function (coll,n,not_found){
var temp__3723__auto____2776 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2776))
{var xs__2777 = temp__3723__auto____2776;

return cljs.core.first.call(null,xs__2777);
} else
{return not_found;
}
});
G__2778 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2778__2779.call(this,coll,n);
case  3 :
return G__2778__2780.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2778;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2782 = (function (){
return "";
});
var str__2783 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2784 = (function (x,var_args){
var ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2786 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2787 = cljs.core.next.call(null,more);
sb = G__2786;
more = G__2787;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
});
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2782.call(this);
case  1 :
return str__2783.call(this,x);
default:
return str__2784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = (function (arglist__2788){
var x = cljs.core.first(arglist__2788);
var ys = cljs.core.rest(arglist__2788);
return str__2784.call(null, x, ys);
});
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2789 = (function (s,start){
return s.substring(start);
});
var subs__2790 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2789.call(this,s,start);
case  3 :
return subs__2790.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2792 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2793 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2792.call(this,ns);
case  2 :
return symbol__2793.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2795 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2796 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2795.call(this,ns);
case  2 :
return keyword__2796.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2798 = cljs.core.seq.call(null,x);
var ys__2799 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2798)))
{return cljs.core.nil_QMARK_.call(null,ys__2799);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2799)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2798),cljs.core.first.call(null,ys__2799))))
{{
var G__2800 = cljs.core.next.call(null,xs__2798);
var G__2801 = cljs.core.next.call(null,ys__2799);
xs__2798 = G__2800;
ys__2799 = G__2801;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2802_SHARP_,p2__2803_SHARP_){
return cljs.core.hash_combine.call(null,p1__2802_SHARP_,cljs.core.hash.call(null,p2__2803_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2804 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2805 = this;
return (new cljs.core.List(this__2805.meta,o,coll,cljs.core.inc.call(null,this__2805.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2806 = this;
return this__2806.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2807 = this;
return this__2807.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2808 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2809 = this;
return this__2809.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2810 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2811 = this;
return (new cljs.core.List(meta,this__2811.first,this__2811.rest,this__2811.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2812 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2813 = this;
return this__2813.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2814 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2815 = this;
return this__2815.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2816 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2817 = this;
return (new cljs.core.List(this__2817.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2818 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2819 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2820 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2821 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2822 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2823 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2824 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2825 = this;
return this__2825.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2826 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2827 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function list(var_args){
var items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
});

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2828 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2829 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2830 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2831 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2831.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2832 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2833 = this;
return this__2833.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2834 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2834.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2834.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2835 = this;
return this__2835.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2836 = this;
return (new cljs.core.Cons(meta,this__2836.first,this__2836.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2837 = null;
var G__2837__2838 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2837__2839 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2837 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2837__2838.call(this,string,f);
case  3 :
return G__2837__2839.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2837;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2841 = null;
var G__2841__2842 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2841__2843 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2841 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2841__2842.call(this,string,k);
case  3 :
return G__2841__2843.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2841;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2845 = null;
var G__2845__2846 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2845__2847 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2845 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2845__2846.call(this,string,n);
case  3 :
return G__2845__2847.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2845;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
cljs.core.string_call_ = (function() {
var string_call_ = null;
var string_call___2849 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var string_call___2850 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
string_call_ = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return string_call___2849.call(this,_,coll);
case  3 :
return string_call___2850.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return string_call_;
})()
;
String.prototype.call = cljs.core.string_call_;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2852 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2852;
} else
{lazy_seq.x = x__2852.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2853 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2854 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2855 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2856 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2856.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2857 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2858 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2859 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2860 = this;
return this__2860.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2861 = this;
return (new cljs.core.LazySeq(meta,this__2861.realized,this__2861.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2862 = cljs.core.array.call(null);

var s__2863 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2863)))
{ary__2862.push(cljs.core.first.call(null,s__2863));
{
var G__2864 = cljs.core.next.call(null,s__2863);
s__2863 = G__2864;
continue;
}
} else
{return ary__2862;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2865 = s;
var i__2866 = n;
var sum__2867 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2868 = cljs.core.pos_QMARK_.call(null,i__2866);

if(cljs.core.truth_(and__3574__auto____2868))
{return cljs.core.seq.call(null,s__2865);
} else
{return and__3574__auto____2868;
}
})()))
{{
var G__2869 = cljs.core.next.call(null,s__2865);
var G__2870 = cljs.core.dec.call(null,i__2866);
var G__2871 = cljs.core.inc.call(null,sum__2867);
s__2865 = G__2869;
i__2866 = G__2870;
sum__2867 = G__2871;
continue;
}
} else
{return sum__2867;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2875 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2876 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2877 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2872 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2872))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2872),concat.call(null,cljs.core.rest.call(null,s__2872),y));
} else
{return y;
}
})));
});
var concat__2878 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var cat__2874 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2873 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2873))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2873),cat.call(null,cljs.core.rest.call(null,xys__2873),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2874.call(null,concat.call(null,x,y),zs);
});
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2875.call(this);
case  1 :
return concat__2876.call(this,x);
case  2 :
return concat__2877.call(this,x,y);
default:
return concat__2878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = (function (arglist__2880){
var x = cljs.core.first(arglist__2880);
var y = cljs.core.first(cljs.core.next(arglist__2880));
var zs = cljs.core.rest(cljs.core.next(arglist__2880));
return concat__2878.call(null, x, y, zs);
});
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2881 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2882 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2883 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2884 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2885 = (function (a,b,c,d,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
});
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2881.call(this,a);
case  2 :
return list_STAR___2882.call(this,a,b);
case  3 :
return list_STAR___2883.call(this,a,b,c);
case  4 :
return list_STAR___2884.call(this,a,b,c,d);
default:
return list_STAR___2885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = (function (arglist__2887){
var a = cljs.core.first(arglist__2887);
var b = cljs.core.first(cljs.core.next(arglist__2887));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2887)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2887))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2887))));
return list_STAR___2885.call(null, a, b, c, d, more);
});
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2897 = (function (f,args){
var fixed_arity__2888 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,fixed_arity__2888),fixed_arity__2888)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2898 = (function (f,x,args){
var arglist__2889 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2890 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2889,fixed_arity__2890),fixed_arity__2890)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2889));
} else
{return f.cljs$lang$applyTo(arglist__2889);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2889));
}
});
var apply__2899 = (function (f,x,y,args){
var arglist__2891 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2892 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2891,fixed_arity__2892),fixed_arity__2892)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2891));
} else
{return f.cljs$lang$applyTo(arglist__2891);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2891));
}
});
var apply__2900 = (function (f,x,y,z,args){
var arglist__2893 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2894 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2893,fixed_arity__2894),fixed_arity__2894)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2893));
} else
{return f.cljs$lang$applyTo(arglist__2893);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2893));
}
});
var apply__2901 = (function (f,a,b,c,d,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
var arglist__2895 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2896 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2895,fixed_arity__2896),fixed_arity__2896)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2895));
} else
{return f.cljs$lang$applyTo(arglist__2895);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2895));
}
});
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2897.call(this,f,a);
case  3 :
return apply__2898.call(this,f,a,b);
case  4 :
return apply__2899.call(this,f,a,b,c);
case  5 :
return apply__2900.call(this,f,a,b,c,d);
default:
return apply__2901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = (function (arglist__2903){
var f = cljs.core.first(arglist__2903);
var a = cljs.core.first(cljs.core.next(arglist__2903));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2903)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2903))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2903)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2903)))));
return apply__2901.call(null, f, a, b, c, d, args);
});
return apply;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2904 = (function (x){
return false;
});
var not_EQ___2905 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2906 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
});
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2904.call(this,x);
case  2 :
return not_EQ___2905.call(this,x,y);
default:
return not_EQ___2906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = (function (arglist__2908){
var x = cljs.core.first(arglist__2908);
var y = cljs.core.first(cljs.core.next(arglist__2908));
var more = cljs.core.rest(cljs.core.next(arglist__2908));
return not_EQ___2906.call(null, x, y, more);
});
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2909 = pred;
var G__2910 = cljs.core.next.call(null,coll);
pred = G__2909;
coll = G__2910;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2911 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2911))
{return or__3576__auto____2911;
} else
{{
var G__2912 = pred;
var G__2913 = cljs.core.next.call(null,coll);
pred = G__2912;
coll = G__2913;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2914 = null;
var G__2914__2915 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2914__2916 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2914__2917 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2914__2918 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
});
G__2914 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2914__2915.call(this);
case  1 :
return G__2914__2916.call(this,x);
case  2 :
return G__2914__2917.call(this,x,y);
default:
return G__2914__2918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2914.cljs$lang$maxFixedArity = 2;
G__2914.cljs$lang$applyTo = (function (arglist__2920){
var x = cljs.core.first(arglist__2920);
var y = cljs.core.first(cljs.core.next(arglist__2920));
var zs = cljs.core.rest(cljs.core.next(arglist__2920));
return G__2914__2918.call(null, x, y, zs);
});
return G__2914;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return x;
});
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2924 = (function (){
return cljs.core.identity;
});
var comp__2925 = (function (f){
return f;
});
var comp__2926 = (function (f,g){
return (function() {
var G__2930 = null;
var G__2930__2931 = (function (){
return f.call(null,g.call(null));
});
var G__2930__2932 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2930__2933 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2930__2934 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2930__2935 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
});
G__2930 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2930__2931.call(this);
case  1 :
return G__2930__2932.call(this,x);
case  2 :
return G__2930__2933.call(this,x,y);
case  3 :
return G__2930__2934.call(this,x,y,z);
default:
return G__2930__2935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2930.cljs$lang$maxFixedArity = 3;
G__2930.cljs$lang$applyTo = (function (arglist__2937){
var x = cljs.core.first(arglist__2937);
var y = cljs.core.first(cljs.core.next(arglist__2937));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2937)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2937)));
return G__2930__2935.call(null, x, y, z, args);
});
return G__2930;
})()
});
var comp__2927 = (function (f,g,h){
return (function() {
var G__2938 = null;
var G__2938__2939 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2938__2940 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2938__2941 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2938__2942 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2938__2943 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
});
G__2938 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2938__2939.call(this);
case  1 :
return G__2938__2940.call(this,x);
case  2 :
return G__2938__2941.call(this,x,y);
case  3 :
return G__2938__2942.call(this,x,y,z);
default:
return G__2938__2943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2938.cljs$lang$maxFixedArity = 3;
G__2938.cljs$lang$applyTo = (function (arglist__2945){
var x = cljs.core.first(arglist__2945);
var y = cljs.core.first(cljs.core.next(arglist__2945));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2945)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2945)));
return G__2938__2943.call(null, x, y, z, args);
});
return G__2938;
})()
});
var comp__2928 = (function (f1,f2,f3,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__2921 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var ret__2922 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2921),args);
var fs__2923 = cljs.core.next.call(null,fs__2921);

while(true){
if(cljs.core.truth_(fs__2923))
{{
var G__2946 = cljs.core.first.call(null,fs__2923).call(null,ret__2922);
var G__2947 = cljs.core.next.call(null,fs__2923);
ret__2922 = G__2946;
fs__2923 = G__2947;
continue;
}
} else
{return ret__2922;
}
break;
}
});
});
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2924.call(this);
case  1 :
return comp__2925.call(this,f1);
case  2 :
return comp__2926.call(this,f1,f2);
case  3 :
return comp__2927.call(this,f1,f2,f3);
default:
return comp__2928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = (function (arglist__2948){
var f1 = cljs.core.first(arglist__2948);
var f2 = cljs.core.first(cljs.core.next(arglist__2948));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2948)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2948)));
return comp__2928.call(null, f1, f2, f3, fs);
});
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2949 = (function (f,arg1){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,args);
});
});
var partial__2950 = (function (f,arg1,arg2){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,args);
});
});
var partial__2951 = (function (f,arg1,arg2,arg3){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
});
});
var partial__2952 = (function (f,arg1,arg2,arg3,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
});
});
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2949.call(this,f,arg1);
case  3 :
return partial__2950.call(this,f,arg1,arg2);
case  4 :
return partial__2951.call(this,f,arg1,arg2,arg3);
default:
return partial__2952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = (function (arglist__2954){
var f = cljs.core.first(arglist__2954);
var arg1 = cljs.core.first(cljs.core.next(arglist__2954));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2954)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2954))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2954))));
return partial__2952.call(null, f, arg1, arg2, arg3, more);
});
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2961 = (function (f,x){
return (function() {
var G__2965 = null;
var G__2965__2966 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2965__2967 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2965__2968 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2965__2969 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
});
G__2965 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2965__2966.call(this,a);
case  2 :
return G__2965__2967.call(this,a,b);
case  3 :
return G__2965__2968.call(this,a,b,c);
default:
return G__2965__2969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2965.cljs$lang$maxFixedArity = 3;
G__2965.cljs$lang$applyTo = (function (arglist__2971){
var a = cljs.core.first(arglist__2971);
var b = cljs.core.first(cljs.core.next(arglist__2971));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2971)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2971)));
return G__2965__2969.call(null, a, b, c, ds);
});
return G__2965;
})()
});
var fnil__2962 = (function (f,x,y){
return (function() {
var G__2972 = null;
var G__2972__2973 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2972__2974 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2972__2975 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
});
G__2972 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2972__2973.call(this,a,b);
case  3 :
return G__2972__2974.call(this,a,b,c);
default:
return G__2972__2975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2972.cljs$lang$maxFixedArity = 3;
G__2972.cljs$lang$applyTo = (function (arglist__2977){
var a = cljs.core.first(arglist__2977);
var b = cljs.core.first(cljs.core.next(arglist__2977));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2977)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2977)));
return G__2972__2975.call(null, a, b, c, ds);
});
return G__2972;
})()
});
var fnil__2963 = (function (f,x,y,z){
return (function() {
var G__2978 = null;
var G__2978__2979 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2978__2980 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2978__2981 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
});
G__2978 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2978__2979.call(this,a,b);
case  3 :
return G__2978__2980.call(this,a,b,c);
default:
return G__2978__2981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2978.cljs$lang$maxFixedArity = 3;
G__2978.cljs$lang$applyTo = (function (arglist__2983){
var a = cljs.core.first(arglist__2983);
var b = cljs.core.first(cljs.core.next(arglist__2983));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2983)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2983)));
return G__2978__2981.call(null, a, b, c, ds);
});
return G__2978;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2961.call(this,f,x);
case  3 :
return fnil__2962.call(this,f,x,y);
case  4 :
return fnil__2963.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3028 = (function (p){
return (function() {
var ep1 = null;
var ep1__3033 = (function (){
return true;
});
var ep1__3034 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3035 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2990 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2990))
{return p.call(null,y);
} else
{return and__3574__auto____2990;
}
})());
});
var ep1__3036 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2991 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2991))
{var and__3574__auto____2992 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2992))
{return p.call(null,z);
} else
{return and__3574__auto____2992;
}
} else
{return and__3574__auto____2991;
}
})());
});
var ep1__3037 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2993 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2993))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2993;
}
})());
});
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3033.call(this);
case  1 :
return ep1__3034.call(this,x);
case  2 :
return ep1__3035.call(this,x,y);
case  3 :
return ep1__3036.call(this,x,y,z);
default:
return ep1__3037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = (function (arglist__3039){
var x = cljs.core.first(arglist__3039);
var y = cljs.core.first(cljs.core.next(arglist__3039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3039)));
return ep1__3037.call(null, x, y, z, args);
});
return ep1;
})()
});
var every_pred__3029 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3040 = (function (){
return true;
});
var ep2__3041 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2994 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2994))
{return p2.call(null,x);
} else
{return and__3574__auto____2994;
}
})());
});
var ep2__3042 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2995 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2995))
{var and__3574__auto____2996 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2996))
{var and__3574__auto____2997 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2997))
{return p2.call(null,y);
} else
{return and__3574__auto____2997;
}
} else
{return and__3574__auto____2996;
}
} else
{return and__3574__auto____2995;
}
})());
});
var ep2__3043 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2998 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2998))
{var and__3574__auto____2999 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2999))
{var and__3574__auto____3000 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3000))
{var and__3574__auto____3001 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3001))
{var and__3574__auto____3002 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3002))
{return p2.call(null,z);
} else
{return and__3574__auto____3002;
}
} else
{return and__3574__auto____3001;
}
} else
{return and__3574__auto____3000;
}
} else
{return and__3574__auto____2999;
}
} else
{return and__3574__auto____2998;
}
})());
});
var ep2__3044 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3003 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3003))
{return cljs.core.every_QMARK_.call(null,(function (p1__2955_SHARP_){
var and__3574__auto____3004 = p1.call(null,p1__2955_SHARP_);

if(cljs.core.truth_(and__3574__auto____3004))
{return p2.call(null,p1__2955_SHARP_);
} else
{return and__3574__auto____3004;
}
}),args);
} else
{return and__3574__auto____3003;
}
})());
});
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3040.call(this);
case  1 :
return ep2__3041.call(this,x);
case  2 :
return ep2__3042.call(this,x,y);
case  3 :
return ep2__3043.call(this,x,y,z);
default:
return ep2__3044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = (function (arglist__3046){
var x = cljs.core.first(arglist__3046);
var y = cljs.core.first(cljs.core.next(arglist__3046));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3046)));
return ep2__3044.call(null, x, y, z, args);
});
return ep2;
})()
});
var every_pred__3030 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3047 = (function (){
return true;
});
var ep3__3048 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3005 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3005))
{var and__3574__auto____3006 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3006))
{return p3.call(null,x);
} else
{return and__3574__auto____3006;
}
} else
{return and__3574__auto____3005;
}
})());
});
var ep3__3049 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3007 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3007))
{var and__3574__auto____3008 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3008))
{var and__3574__auto____3009 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3009))
{var and__3574__auto____3010 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3010))
{var and__3574__auto____3011 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3011))
{return p3.call(null,y);
} else
{return and__3574__auto____3011;
}
} else
{return and__3574__auto____3010;
}
} else
{return and__3574__auto____3009;
}
} else
{return and__3574__auto____3008;
}
} else
{return and__3574__auto____3007;
}
})());
});
var ep3__3050 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3012 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3012))
{var and__3574__auto____3013 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3013))
{var and__3574__auto____3014 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3014))
{var and__3574__auto____3015 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3015))
{var and__3574__auto____3016 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3016))
{var and__3574__auto____3017 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____3017))
{var and__3574__auto____3018 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3018))
{var and__3574__auto____3019 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____3019))
{return p3.call(null,z);
} else
{return and__3574__auto____3019;
}
} else
{return and__3574__auto____3018;
}
} else
{return and__3574__auto____3017;
}
} else
{return and__3574__auto____3016;
}
} else
{return and__3574__auto____3015;
}
} else
{return and__3574__auto____3014;
}
} else
{return and__3574__auto____3013;
}
} else
{return and__3574__auto____3012;
}
})());
});
var ep3__3051 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3020 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3020))
{return cljs.core.every_QMARK_.call(null,(function (p1__2956_SHARP_){
var and__3574__auto____3021 = p1.call(null,p1__2956_SHARP_);

if(cljs.core.truth_(and__3574__auto____3021))
{var and__3574__auto____3022 = p2.call(null,p1__2956_SHARP_);

if(cljs.core.truth_(and__3574__auto____3022))
{return p3.call(null,p1__2956_SHARP_);
} else
{return and__3574__auto____3022;
}
} else
{return and__3574__auto____3021;
}
}),args);
} else
{return and__3574__auto____3020;
}
})());
});
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3047.call(this);
case  1 :
return ep3__3048.call(this,x);
case  2 :
return ep3__3049.call(this,x,y);
case  3 :
return ep3__3050.call(this,x,y,z);
default:
return ep3__3051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = (function (arglist__3053){
var x = cljs.core.first(arglist__3053);
var y = cljs.core.first(cljs.core.next(arglist__3053));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3053)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3053)));
return ep3__3051.call(null, x, y, z, args);
});
return ep3;
})()
});
var every_pred__3031 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__3023 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3054 = (function (){
return true;
});
var epn__3055 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2957_SHARP_){
return p1__2957_SHARP_.call(null,x);
}),ps__3023);
});
var epn__3056 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2958_SHARP_){
var and__3574__auto____3024 = p1__2958_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3024))
{return p1__2958_SHARP_.call(null,y);
} else
{return and__3574__auto____3024;
}
}),ps__3023);
});
var epn__3057 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2959_SHARP_){
var and__3574__auto____3025 = p1__2959_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3025))
{var and__3574__auto____3026 = p1__2959_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____3026))
{return p1__2959_SHARP_.call(null,z);
} else
{return and__3574__auto____3026;
}
} else
{return and__3574__auto____3025;
}
}),ps__3023);
});
var epn__3058 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3027 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3027))
{return cljs.core.every_QMARK_.call(null,(function (p1__2960_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2960_SHARP_,args);
}),ps__3023);
} else
{return and__3574__auto____3027;
}
})());
});
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3054.call(this);
case  1 :
return epn__3055.call(this,x);
case  2 :
return epn__3056.call(this,x,y);
case  3 :
return epn__3057.call(this,x,y,z);
default:
return epn__3058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = (function (arglist__3060){
var x = cljs.core.first(arglist__3060);
var y = cljs.core.first(cljs.core.next(arglist__3060));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3060)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3060)));
return epn__3058.call(null, x, y, z, args);
});
return epn;
})()
});
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3028.call(this,p1);
case  2 :
return every_pred__3029.call(this,p1,p2);
case  3 :
return every_pred__3030.call(this,p1,p2,p3);
default:
return every_pred__3031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = (function (arglist__3061){
var p1 = cljs.core.first(arglist__3061);
var p2 = cljs.core.first(cljs.core.next(arglist__3061));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3061)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3061)));
return every_pred__3031.call(null, p1, p2, p3, ps);
});
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3101 = (function (p){
return (function() {
var sp1 = null;
var sp1__3106 = (function (){
return null;
});
var sp1__3107 = (function (x){
return p.call(null,x);
});
var sp1__3108 = (function (x,y){
var or__3576__auto____3063 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3063))
{return or__3576__auto____3063;
} else
{return p.call(null,y);
}
});
var sp1__3109 = (function (x,y,z){
var or__3576__auto____3064 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3064))
{return or__3576__auto____3064;
} else
{var or__3576__auto____3065 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____3065))
{return or__3576__auto____3065;
} else
{return p.call(null,z);
}
}
});
var sp1__3110 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3066 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3066))
{return or__3576__auto____3066;
} else
{return cljs.core.some.call(null,p,args);
}
});
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3106.call(this);
case  1 :
return sp1__3107.call(this,x);
case  2 :
return sp1__3108.call(this,x,y);
case  3 :
return sp1__3109.call(this,x,y,z);
default:
return sp1__3110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = (function (arglist__3112){
var x = cljs.core.first(arglist__3112);
var y = cljs.core.first(cljs.core.next(arglist__3112));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3112)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3112)));
return sp1__3110.call(null, x, y, z, args);
});
return sp1;
})()
});
var some_fn__3102 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3113 = (function (){
return null;
});
var sp2__3114 = (function (x){
var or__3576__auto____3067 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3067))
{return or__3576__auto____3067;
} else
{return p2.call(null,x);
}
});
var sp2__3115 = (function (x,y){
var or__3576__auto____3068 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3068))
{return or__3576__auto____3068;
} else
{var or__3576__auto____3069 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3069))
{return or__3576__auto____3069;
} else
{var or__3576__auto____3070 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3070))
{return or__3576__auto____3070;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3116 = (function (x,y,z){
var or__3576__auto____3071 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3071))
{return or__3576__auto____3071;
} else
{var or__3576__auto____3072 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3072))
{return or__3576__auto____3072;
} else
{var or__3576__auto____3073 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3073))
{return or__3576__auto____3073;
} else
{var or__3576__auto____3074 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3074))
{return or__3576__auto____3074;
} else
{var or__3576__auto____3075 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3075))
{return or__3576__auto____3075;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3117 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3076 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3076))
{return or__3576__auto____3076;
} else
{return cljs.core.some.call(null,(function (p1__2984_SHARP_){
var or__3576__auto____3077 = p1.call(null,p1__2984_SHARP_);

if(cljs.core.truth_(or__3576__auto____3077))
{return or__3576__auto____3077;
} else
{return p2.call(null,p1__2984_SHARP_);
}
}),args);
}
});
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3113.call(this);
case  1 :
return sp2__3114.call(this,x);
case  2 :
return sp2__3115.call(this,x,y);
case  3 :
return sp2__3116.call(this,x,y,z);
default:
return sp2__3117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = (function (arglist__3119){
var x = cljs.core.first(arglist__3119);
var y = cljs.core.first(cljs.core.next(arglist__3119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3119)));
return sp2__3117.call(null, x, y, z, args);
});
return sp2;
})()
});
var some_fn__3103 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3120 = (function (){
return null;
});
var sp3__3121 = (function (x){
var or__3576__auto____3078 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3078))
{return or__3576__auto____3078;
} else
{var or__3576__auto____3079 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3079))
{return or__3576__auto____3079;
} else
{return p3.call(null,x);
}
}
});
var sp3__3122 = (function (x,y){
var or__3576__auto____3080 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3080))
{return or__3576__auto____3080;
} else
{var or__3576__auto____3081 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3081))
{return or__3576__auto____3081;
} else
{var or__3576__auto____3082 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3082))
{return or__3576__auto____3082;
} else
{var or__3576__auto____3083 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3083))
{return or__3576__auto____3083;
} else
{var or__3576__auto____3084 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3084))
{return or__3576__auto____3084;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3123 = (function (x,y,z){
var or__3576__auto____3085 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3085))
{return or__3576__auto____3085;
} else
{var or__3576__auto____3086 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3086))
{return or__3576__auto____3086;
} else
{var or__3576__auto____3087 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3087))
{return or__3576__auto____3087;
} else
{var or__3576__auto____3088 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3088))
{return or__3576__auto____3088;
} else
{var or__3576__auto____3089 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3089))
{return or__3576__auto____3089;
} else
{var or__3576__auto____3090 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____3090))
{return or__3576__auto____3090;
} else
{var or__3576__auto____3091 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3091))
{return or__3576__auto____3091;
} else
{var or__3576__auto____3092 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____3092))
{return or__3576__auto____3092;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3124 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3093 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3093))
{return or__3576__auto____3093;
} else
{return cljs.core.some.call(null,(function (p1__2985_SHARP_){
var or__3576__auto____3094 = p1.call(null,p1__2985_SHARP_);

if(cljs.core.truth_(or__3576__auto____3094))
{return or__3576__auto____3094;
} else
{var or__3576__auto____3095 = p2.call(null,p1__2985_SHARP_);

if(cljs.core.truth_(or__3576__auto____3095))
{return or__3576__auto____3095;
} else
{return p3.call(null,p1__2985_SHARP_);
}
}
}),args);
}
});
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3120.call(this);
case  1 :
return sp3__3121.call(this,x);
case  2 :
return sp3__3122.call(this,x,y);
case  3 :
return sp3__3123.call(this,x,y,z);
default:
return sp3__3124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = (function (arglist__3126){
var x = cljs.core.first(arglist__3126);
var y = cljs.core.first(cljs.core.next(arglist__3126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3126)));
return sp3__3124.call(null, x, y, z, args);
});
return sp3;
})()
});
var some_fn__3104 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__3096 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3127 = (function (){
return null;
});
var spn__3128 = (function (x){
return cljs.core.some.call(null,(function (p1__2986_SHARP_){
return p1__2986_SHARP_.call(null,x);
}),ps__3096);
});
var spn__3129 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2987_SHARP_){
var or__3576__auto____3097 = p1__2987_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3097))
{return or__3576__auto____3097;
} else
{return p1__2987_SHARP_.call(null,y);
}
}),ps__3096);
});
var spn__3130 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2988_SHARP_){
var or__3576__auto____3098 = p1__2988_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3098))
{return or__3576__auto____3098;
} else
{var or__3576__auto____3099 = p1__2988_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____3099))
{return or__3576__auto____3099;
} else
{return p1__2988_SHARP_.call(null,z);
}
}
}),ps__3096);
});
var spn__3131 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3100 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3100))
{return or__3576__auto____3100;
} else
{return cljs.core.some.call(null,(function (p1__2989_SHARP_){
return cljs.core.some.call(null,p1__2989_SHARP_,args);
}),ps__3096);
}
});
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3127.call(this);
case  1 :
return spn__3128.call(this,x);
case  2 :
return spn__3129.call(this,x,y);
case  3 :
return spn__3130.call(this,x,y,z);
default:
return spn__3131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = (function (arglist__3133){
var x = cljs.core.first(arglist__3133);
var y = cljs.core.first(cljs.core.next(arglist__3133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3133)));
return spn__3131.call(null, x, y, z, args);
});
return spn;
})()
});
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3101.call(this,p1);
case  2 :
return some_fn__3102.call(this,p1,p2);
case  3 :
return some_fn__3103.call(this,p1,p2,p3);
default:
return some_fn__3104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = (function (arglist__3134){
var p1 = cljs.core.first(arglist__3134);
var p2 = cljs.core.first(cljs.core.next(arglist__3134));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3134)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3134)));
return some_fn__3104.call(null, p1, p2, p3, ps);
});
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3147 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3135))
{var s__3136 = temp__3726__auto____3135;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3136)),map.call(null,f,cljs.core.rest.call(null,s__3136)));
} else
{return null;
}
})));
});
var map__3148 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3137 = cljs.core.seq.call(null,c1);
var s2__3138 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3139 = s1__3137;

if(cljs.core.truth_(and__3574__auto____3139))
{return s2__3138;
} else
{return and__3574__auto____3139;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3137),cljs.core.first.call(null,s2__3138)),map.call(null,f,cljs.core.rest.call(null,s1__3137),cljs.core.rest.call(null,s2__3138)));
} else
{return null;
}
})));
});
var map__3149 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3140 = cljs.core.seq.call(null,c1);
var s2__3141 = cljs.core.seq.call(null,c2);
var s3__3142 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____3143 = s1__3140;

if(cljs.core.truth_(and__3574__auto____3143))
{var and__3574__auto____3144 = s2__3141;

if(cljs.core.truth_(and__3574__auto____3144))
{return s3__3142;
} else
{return and__3574__auto____3144;
}
} else
{return and__3574__auto____3143;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3140),cljs.core.first.call(null,s2__3141),cljs.core.first.call(null,s3__3142)),map.call(null,f,cljs.core.rest.call(null,s1__3140),cljs.core.rest.call(null,s2__3141),cljs.core.rest.call(null,s3__3142)));
} else
{return null;
}
})));
});
var map__3150 = (function (f,c1,c2,c3,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var step__3146 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3145 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3145)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3145),step.call(null,map.call(null,cljs.core.rest,ss__3145)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3062_SHARP_){
return cljs.core.apply.call(null,f,p1__3062_SHARP_);
}),step__3146.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
});
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3147.call(this,f,c1);
case  3 :
return map__3148.call(this,f,c1,c2);
case  4 :
return map__3149.call(this,f,c1,c2,c3);
default:
return map__3150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = (function (arglist__3152){
var f = cljs.core.first(arglist__3152);
var c1 = cljs.core.first(cljs.core.next(arglist__3152));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3152)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3152))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3152))));
return map__3150.call(null, f, c1, c2, c3, colls);
});
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____3153 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3153))
{var s__3154 = temp__3726__auto____3153;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3154),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__3154)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3157 = (function (n,coll){
while(true){
var s__3155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3156 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____3156))
{return s__3155;
} else
{return and__3574__auto____3156;
}
})()))
{{
var G__3158 = cljs.core.dec.call(null,n);
var G__3159 = cljs.core.rest.call(null,s__3155);
n = G__3158;
coll = G__3159;
continue;
}
} else
{return s__3155;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3157.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3160 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3161 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3160.call(this,n);
case  2 :
return drop_last__3161.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3163 = cljs.core.seq.call(null,coll);
var lead__3164 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3164))
{{
var G__3165 = cljs.core.next.call(null,s__3163);
var G__3166 = cljs.core.next.call(null,lead__3164);
s__3163 = G__3165;
lead__3164 = G__3166;
continue;
}
} else
{return s__3163;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3169 = (function (pred,coll){
while(true){
var s__3167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3168 = s__3167;

if(cljs.core.truth_(and__3574__auto____3168))
{return pred.call(null,cljs.core.first.call(null,s__3167));
} else
{return and__3574__auto____3168;
}
})()))
{{
var G__3170 = pred;
var G__3171 = cljs.core.rest.call(null,s__3167);
pred = G__3170;
coll = G__3171;
continue;
}
} else
{return s__3167;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3169.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3172 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3172))
{var s__3173 = temp__3726__auto____3172;

return cljs.core.concat.call(null,s__3173,cycle.call(null,s__3173));
} else
{return null;
}
})));
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3174 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3175 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3174.call(this,n);
case  2 :
return repeat__3175.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3177 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3178 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3177.call(this,n);
case  2 :
return repeatedly__3178.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3184 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3180 = cljs.core.seq.call(null,c1);
var s2__3181 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3182 = s1__3180;

if(cljs.core.truth_(and__3574__auto____3182))
{return s2__3181;
} else
{return and__3574__auto____3182;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3180),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3181),interleave.call(null,cljs.core.rest.call(null,s1__3180),cljs.core.rest.call(null,s2__3181))));
} else
{return null;
}
})));
});
var interleave__3185 = (function (c1,c2,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3183 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3183)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3183),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3183)));
} else
{return null;
}
})));
});
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3184.call(this,c1,c2);
default:
return interleave__3185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = (function (arglist__3187){
var c1 = cljs.core.first(arglist__3187);
var c2 = cljs.core.first(cljs.core.next(arglist__3187));
var colls = cljs.core.rest(cljs.core.next(arglist__3187));
return interleave__3185.call(null, c1, c2, colls);
});
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3190 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3188))
{var coll__3189 = temp__3723__auto____3188;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3189),cat.call(null,cljs.core.rest.call(null,coll__3189),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3190.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3191 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3192 = (function (f,coll,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
});
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3191.call(this,f,coll);
default:
return mapcat__3192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = (function (arglist__3194){
var f = cljs.core.first(arglist__3194);
var coll = cljs.core.first(cljs.core.next(arglist__3194));
var colls = cljs.core.rest(cljs.core.next(arglist__3194));
return mapcat__3192.call(null, f, coll, colls);
});
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3195))
{var s__3196 = temp__3726__auto____3195;

var f__3197 = cljs.core.first.call(null,s__3196);
var r__3198 = cljs.core.rest.call(null,s__3196);

if(cljs.core.truth_(pred.call(null,f__3197)))
{return cljs.core.cons.call(null,f__3197,filter.call(null,pred,r__3198));
} else
{return filter.call(null,pred,r__3198);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3200 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3200.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3199_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3199_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3207 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3208 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3201 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3201))
{var s__3202 = temp__3726__auto____3201;

var p__3203 = cljs.core.take.call(null,n,s__3202);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3203))))
{return cljs.core.cons.call(null,p__3203,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3202)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3209 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3204))
{var s__3205 = temp__3726__auto____3204;

var p__3206 = cljs.core.take.call(null,n,s__3205);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3206))))
{return cljs.core.cons.call(null,p__3206,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3205)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3206,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3207.call(this,n,step);
case  3 :
return partition__3208.call(this,n,step,pad);
case  4 :
return partition__3209.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3215 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3216 = (function (m,ks,not_found){
var sentinel__3211 = cljs.core.lookup_sentinel;
var m__3212 = m;
var ks__3213 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3213))
{var m__3214 = cljs.core.get.call(null,m__3212,cljs.core.first.call(null,ks__3213),sentinel__3211);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3211,m__3214)))
{return not_found;
} else
{{
var G__3218 = sentinel__3211;
var G__3219 = m__3214;
var G__3220 = cljs.core.next.call(null,ks__3213);
sentinel__3211 = G__3218;
m__3212 = G__3219;
ks__3213 = G__3220;
continue;
}
}
} else
{return m__3212;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3215.call(this,m,ks);
case  3 :
return get_in__3216.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3221,v){
var vec__3222__3223 = p__3221;
var k__3224 = cljs.core.nth.call(null,vec__3222__3223,0,null);
var ks__3225 = cljs.core.nthnext.call(null,vec__3222__3223,1);

if(cljs.core.truth_(ks__3225))
{return cljs.core.assoc.call(null,m,k__3224,assoc_in.call(null,cljs.core.get.call(null,m,k__3224),ks__3225,v));
} else
{return cljs.core.assoc.call(null,m,k__3224,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function update_in(m,p__3226,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__3227__3228 = p__3226;
var k__3229 = cljs.core.nth.call(null,vec__3227__3228,0,null);
var ks__3230 = cljs.core.nthnext.call(null,vec__3227__3228,1);

if(cljs.core.truth_(ks__3230))
{return cljs.core.assoc.call(null,m,k__3229,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3229),ks__3230,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3229,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3229),args));
}
});

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3231 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3232 = this;
var new_array__3233 = cljs.core.aclone.call(null,this__3232.array);

new_array__3233.push(o);
return (new cljs.core.Vector(this__3232.meta,new_array__3233));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3234 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3234.array.length,0)))
{var vector_seq__3235 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__3234.array.length)))
{return cljs.core.cons.call(null,(this__3234.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__3235.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3236 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3237 = this;
var count__3238 = this__3237.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__3238,0)))
{return (this__3237.array[cljs.core.dec.call(null,count__3238)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3239 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3239.array.length,0)))
{var new_array__3240 = cljs.core.aclone.call(null,this__3239.array);

new_array__3240.pop();
return (new cljs.core.Vector(this__3239.meta,new_array__3240));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3241 = this;
return (new cljs.core.Vector(meta,this__3241.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3242 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3242.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3256 = null;
var G__3256__3257 = (function (coll,n){
var this__3243 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3244 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3244))
{return cljs.core._LT_.call(null,n,this__3243.array.length);
} else
{return and__3574__auto____3244;
}
})()))
{return (this__3243.array[n]);
} else
{return null;
}
});
var G__3256__3258 = (function (coll,n,not_found){
var this__3245 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3246 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3246))
{return cljs.core._LT_.call(null,n,this__3245.array.length);
} else
{return and__3574__auto____3246;
}
})()))
{return (this__3245.array[n]);
} else
{return not_found;
}
});
G__3256 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3256__3257.call(this,coll,n);
case  3 :
return G__3256__3258.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3256;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3247 = this;
return this__3247.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3260 = null;
var G__3260__3261 = (function (v,f){
var this__3248 = this;
return cljs.core.ci_reduce.call(null,this__3248.array,f);
});
var G__3260__3262 = (function (v,f,start){
var this__3249 = this;
return cljs.core.ci_reduce.call(null,this__3249.array,f,start);
});
G__3260 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3260__3261.call(this,v,f);
case  3 :
return G__3260__3262.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3260;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3250 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3251 = this;
return this__3251.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3252 = this;
var new_array__3253 = cljs.core.aclone.call(null,this__3252.array);

(new_array__3253[k] = v);
return (new cljs.core.Vector(this__3252.meta,new_array__3253));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3264 = null;
var G__3264__3265 = (function (coll,k){
var this__3254 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3264__3266 = (function (coll,k,not_found){
var this__3255 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3264 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3264__3265.call(this,coll,k);
case  3 :
return G__3264__3266.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3264;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3268 = null;
var G__3268__3269 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3268__3270 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3268 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3268__3269.call(this,_,k);
case  3 :
return G__3268__3270.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3268;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function vector(var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.vec.call(null,args);
});

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3272 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3273 = array.length;

var i__3274 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3274,len__3273)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3274]))))
{return i__3274;
} else
{{
var G__3275 = cljs.core._PLUS_.call(null,i__3274,incr);
i__3274 = G__3275;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3277 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3278 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____3276 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3276))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3276;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3277.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3278.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3281 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3282 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3283 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3283.keys.length)))
{return cljs.core.map.call(null,(function (p1__3280_SHARP_){
return cljs.core.vector.call(null,p1__3280_SHARP_,(this__3283.strobj[p1__3280_SHARP_]));
}),this__3283.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3284 = this;
return (new cljs.core.ObjMap(meta,this__3284.keys,this__3284.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3285 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3286 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3286))
{return this__3285.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3286;
}
})()))
{var new_keys__3287 = cljs.core.aclone.call(null,this__3285.keys);
var new_strobj__3288 = goog.object.clone.call(null,this__3285.strobj);

new_keys__3287.splice(cljs.core.scan_array.call(null,1,k,new_keys__3287),1);
cljs.core.js_delete.call(null,new_strobj__3288,k);
return (new cljs.core.ObjMap(this__3285.meta,new_keys__3287,new_strobj__3288));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3289 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3289.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3290 = this;
return this__3290.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3291 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3292 = this;
return this__3292.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3293 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3294 = goog.object.clone.call(null,this__3293.strobj);
var overwrite_QMARK___3295 = new_strobj__3294.hasOwnProperty(k);

(new_strobj__3294[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3295))
{return (new cljs.core.ObjMap(this__3293.meta,this__3293.keys,new_strobj__3294));
} else
{var new_keys__3296 = cljs.core.aclone.call(null,this__3293.keys);

new_keys__3296.push(k);
return (new cljs.core.ObjMap(this__3293.meta,new_keys__3296,new_strobj__3294));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3293.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3297 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3297.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3300 = null;
var G__3300__3301 = (function (coll,k){
var this__3298 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3300__3302 = (function (coll,k,not_found){
var this__3299 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3299.strobj,(this__3299.strobj[k]),not_found);
});
G__3300 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3300__3301.call(this,coll,k);
case  3 :
return G__3300__3302.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3300;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3305 = null;
var G__3305__3306 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3305__3307 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3305 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3305__3306.call(this,_,k);
case  3 :
return G__3305__3307.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3305;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3309 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3310 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3311 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3311.count)))
{var hashes__3312 = cljs.core.js_keys.call(null,this__3311.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3304_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3311.hashobj[p1__3304_SHARP_])));
}),hashes__3312);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3313 = this;
return (new cljs.core.HashMap(meta,this__3313.count,this__3313.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3314 = this;
var h__3315 = cljs.core.hash.call(null,k);
var bucket__3316 = (this__3314.hashobj[h__3315]);
var i__3317 = (cljs.core.truth_(bucket__3316)?cljs.core.scan_array.call(null,2,k,bucket__3316):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3317)))
{return coll;
} else
{var new_hashobj__3318 = goog.object.clone.call(null,this__3314.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3316.length)))
{cljs.core.js_delete.call(null,new_hashobj__3318,h__3315);
} else
{var new_bucket__3319 = cljs.core.aclone.call(null,bucket__3316);

new_bucket__3319.splice(i__3317,2);
(new_hashobj__3318[h__3315] = new_bucket__3319);
}
return (new cljs.core.HashMap(this__3314.meta,cljs.core.dec.call(null,this__3314.count),new_hashobj__3318));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3320 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3320.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3321 = this;
return this__3321.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3322 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3323 = this;
return this__3323.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3324 = this;
var h__3325 = cljs.core.hash.call(null,k);
var bucket__3326 = (this__3324.hashobj[h__3325]);

if(cljs.core.truth_(bucket__3326))
{var new_bucket__3327 = cljs.core.aclone.call(null,bucket__3326);
var new_hashobj__3328 = goog.object.clone.call(null,this__3324.hashobj);

(new_hashobj__3328[h__3325] = new_bucket__3327);
var temp__3723__auto____3329 = cljs.core.scan_array.call(null,2,k,new_bucket__3327);

if(cljs.core.truth_(temp__3723__auto____3329))
{var i__3330 = temp__3723__auto____3329;

(new_bucket__3327[cljs.core.inc.call(null,i__3330)] = v);
return (new cljs.core.HashMap(this__3324.meta,this__3324.count,new_hashobj__3328));
} else
{new_bucket__3327.push(k,v);
return (new cljs.core.HashMap(this__3324.meta,cljs.core.inc.call(null,this__3324.count),new_hashobj__3328));
}
} else
{var new_hashobj__3331 = goog.object.clone.call(null,this__3324.hashobj);

(new_hashobj__3331[h__3325] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3324.meta,cljs.core.inc.call(null,this__3324.count),new_hashobj__3331));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3332 = this;
var bucket__3333 = (this__3332.hashobj[cljs.core.hash.call(null,k)]);
var i__3334 = (cljs.core.truth_(bucket__3333)?cljs.core.scan_array.call(null,2,k,bucket__3333):null);

if(cljs.core.truth_(i__3334))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3339 = null;
var G__3339__3340 = (function (coll,k){
var this__3335 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3339__3341 = (function (coll,k,not_found){
var this__3336 = this;
var bucket__3337 = (this__3336.hashobj[cljs.core.hash.call(null,k)]);
var i__3338 = (cljs.core.truth_(bucket__3337)?cljs.core.scan_array.call(null,2,k,bucket__3337):null);

if(cljs.core.truth_(i__3338))
{return (bucket__3337[cljs.core.inc.call(null,i__3338)]);
} else
{return not_found;
}
});
G__3339 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3339__3340.call(this,coll,k);
case  3 :
return G__3339__3341.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3339;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3343 = ks.length;

var i__3344 = 0;
var out__3345 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3344,len__3343)))
{{
var G__3346 = cljs.core.inc.call(null,i__3344);
var G__3347 = cljs.core.assoc.call(null,out__3345,(ks[i__3344]),(vs[i__3344]));
i__3344 = G__3346;
out__3345 = G__3347;
continue;
}
} else
{return out__3345;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3348 = null;
var G__3348__3349 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3348__3350 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3348 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3348__3349.call(this,_,k);
case  3 :
return G__3348__3350.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3348;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function hash_map(var_args){
var keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var in$__3352 = cljs.core.seq.call(null,keyvals);
var out__3353 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3352))
{{
var G__3354 = cljs.core.nnext.call(null,in$__3352);
var G__3355 = cljs.core.assoc.call(null,out__3353,cljs.core.first.call(null,in$__3352),cljs.core.second.call(null,in$__3352));
in$__3352 = G__3354;
out__3353 = G__3355;
continue;
}
} else
{return out__3353;
}
break;
}
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function merge(var_args){
var maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3356_SHARP_,p2__3357_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3358 = p1__3356_SHARP_;

if(cljs.core.truth_(or__3576__auto____3358))
{return or__3576__auto____3358;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3357_SHARP_);
}),maps);
} else
{return null;
}
});
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3360 = cljs.core.ObjMap.fromObject([],{});
var keys__3361 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3361))
{var key__3362 = cljs.core.first.call(null,keys__3361);
var entry__3363 = cljs.core.get.call(null,map,key__3362);

{
var G__3364 = (cljs.core.truth_(entry__3363)?cljs.core.assoc.call(null,ret__3360,key__3362,entry__3363):ret__3360);
var G__3365 = cljs.core.next.call(null,keys__3361);
ret__3360 = G__3364;
keys__3361 = G__3365;
continue;
}
} else
{return ret__3360;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3366 = this;
return (new cljs.core.Set(this__3366.meta,cljs.core.dissoc.call(null,this__3366.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3367 = this;
var and__3574__auto____3368 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3368))
{var and__3574__auto____3369 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3369))
{return cljs.core.every_QMARK_.call(null,(function (p1__3359_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3359_SHARP_);
}),other);
} else
{return and__3574__auto____3369;
}
} else
{return and__3574__auto____3368;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3370 = this;
return (new cljs.core.Set(this__3370.meta,cljs.core.assoc.call(null,this__3370.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3371 = this;
return cljs.core.keys.call(null,this__3371.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3372 = this;
return (new cljs.core.Set(meta,this__3372.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3373 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3373.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3374 = this;
return this__3374.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3375 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3376 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3379 = null;
var G__3379__3380 = (function (coll,v){
var this__3377 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3379__3381 = (function (coll,v,not_found){
var this__3378 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3378.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3379 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3379__3380.call(this,coll,v);
case  3 :
return G__3379__3381.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3379;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3383 = null;
var G__3383__3384 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3383__3385 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3383 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3383__3384.call(this,_,k);
case  3 :
return G__3383__3385.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3383;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3387 = cljs.core.seq.call(null,coll);
var out__3388 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3387))))
{{
var G__3389 = cljs.core.rest.call(null,in$__3387);
var G__3390 = cljs.core.conj.call(null,out__3388,cljs.core.first.call(null,in$__3387));
in$__3387 = G__3389;
out__3388 = G__3390;
continue;
}
} else
{return out__3388;
}
break;
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3398 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3391,seen){
while(true){
var vec__3392__3393 = p__3391;
var f__3394 = cljs.core.nth.call(null,vec__3392__3393,0,null);
var xs__3395 = vec__3392__3393;

var temp__3726__auto____3396 = cljs.core.seq.call(null,xs__3395);

if(cljs.core.truth_(temp__3726__auto____3396))
{var s__3397 = temp__3726__auto____3396;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3394)))
{{
var G__3399 = cljs.core.rest.call(null,s__3397);
var G__3400 = seen;
p__3391 = G__3399;
seen = G__3400;
continue;
}
} else
{return cljs.core.cons.call(null,f__3394,step.call(null,cljs.core.rest.call(null,s__3397),cljs.core.conj.call(null,seen,f__3394)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3398.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3401 = cljs.core.Vector.fromArray([]);
var s__3402 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3402)))
{{
var G__3403 = cljs.core.conj.call(null,ret__3401,cljs.core.first.call(null,s__3402));
var G__3404 = cljs.core.next.call(null,s__3402);
ret__3401 = G__3403;
s__3402 = G__3404;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3401);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3405 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3405))
{return or__3576__auto____3405;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3406 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3406,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3406));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3407 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3407))
{return or__3576__auto____3407;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3408 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3408,-1)))
{return cljs.core.subs.call(null,x,2,i__3408);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3411 = cljs.core.ObjMap.fromObject([],{});
var ks__3412 = cljs.core.seq.call(null,keys);
var vs__3413 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3414 = ks__3412;

if(cljs.core.truth_(and__3574__auto____3414))
{return vs__3413;
} else
{return and__3574__auto____3414;
}
})()))
{{
var G__3415 = cljs.core.assoc.call(null,map__3411,cljs.core.first.call(null,ks__3412),cljs.core.first.call(null,vs__3413));
var G__3416 = cljs.core.next.call(null,ks__3412);
var G__3417 = cljs.core.next.call(null,vs__3413);
map__3411 = G__3415;
ks__3412 = G__3416;
vs__3413 = G__3417;
continue;
}
} else
{return map__3411;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3420 = (function (k,x){
return x;
});
var max_key__3421 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3422 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3409_SHARP_,p2__3410_SHARP_){
return max_key.call(null,k,p1__3409_SHARP_,p2__3410_SHARP_);
}),max_key.call(null,k,x,y),more);
});
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3420.call(this,k,x);
case  3 :
return max_key__3421.call(this,k,x,y);
default:
return max_key__3422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = (function (arglist__3424){
var k = cljs.core.first(arglist__3424);
var x = cljs.core.first(cljs.core.next(arglist__3424));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3424)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3424)));
return max_key__3422.call(null, k, x, y, more);
});
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3425 = (function (k,x){
return x;
});
var min_key__3426 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3427 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3418_SHARP_,p2__3419_SHARP_){
return min_key.call(null,k,p1__3418_SHARP_,p2__3419_SHARP_);
}),min_key.call(null,k,x,y),more);
});
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3425.call(this,k,x);
case  3 :
return min_key__3426.call(this,k,x,y);
default:
return min_key__3427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = (function (arglist__3429){
var k = cljs.core.first(arglist__3429);
var x = cljs.core.first(cljs.core.next(arglist__3429));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3429)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3429)));
return min_key__3427.call(null, k, x, y, more);
});
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3432 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3433 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3430 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3430))
{var s__3431 = temp__3726__auto____3430;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3431),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3431)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3432.call(this,n,step);
case  3 :
return partition_all__3433.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3435))
{var s__3436 = temp__3726__auto____3435;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3436))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3436),take_while.call(null,pred,cljs.core.rest.call(null,s__3436)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3438 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3438))
{var s__3439 = temp__3726__auto____3438;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3439),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3439)));
} else
{return null;
}
})));
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3450 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3450))
{var s__3451 = temp__3726__auto____3450;

var fst__3452 = cljs.core.first.call(null,s__3451);
var fv__3453 = f.call(null,fst__3452);
var run__3454 = cljs.core.cons.call(null,fst__3452,cljs.core.take_while.call(null,(function (p1__3437_SHARP_){
return cljs.core._EQ_.call(null,fv__3453,f.call(null,p1__3437_SHARP_));
}),cljs.core.next.call(null,s__3451)));

return cljs.core.cons.call(null,run__3454,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3454),s__3451))));
} else
{return null;
}
})));
});
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3456 = (function (f){
return (function() {
var G__3461 = null;
var G__3461__3462 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3461__3463 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3461__3464 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3461__3465 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3461__3466 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
});
G__3461 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3461__3462.call(this);
case  1 :
return G__3461__3463.call(this,x);
case  2 :
return G__3461__3464.call(this,x,y);
case  3 :
return G__3461__3465.call(this,x,y,z);
default:
return G__3461__3466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3461.cljs$lang$maxFixedArity = 3;
G__3461.cljs$lang$applyTo = (function (arglist__3468){
var x = cljs.core.first(arglist__3468);
var y = cljs.core.first(cljs.core.next(arglist__3468));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3468)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3468)));
return G__3461__3466.call(null, x, y, z, args);
});
return G__3461;
})()
});
var juxt__3457 = (function (f,g){
return (function() {
var G__3469 = null;
var G__3469__3470 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3469__3471 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3469__3472 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3469__3473 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3469__3474 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
});
G__3469 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3469__3470.call(this);
case  1 :
return G__3469__3471.call(this,x);
case  2 :
return G__3469__3472.call(this,x,y);
case  3 :
return G__3469__3473.call(this,x,y,z);
default:
return G__3469__3474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3469.cljs$lang$maxFixedArity = 3;
G__3469.cljs$lang$applyTo = (function (arglist__3476){
var x = cljs.core.first(arglist__3476);
var y = cljs.core.first(cljs.core.next(arglist__3476));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3476)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3476)));
return G__3469__3474.call(null, x, y, z, args);
});
return G__3469;
})()
});
var juxt__3458 = (function (f,g,h){
return (function() {
var G__3477 = null;
var G__3477__3478 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3477__3479 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3477__3480 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3477__3481 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3477__3482 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
});
G__3477 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3477__3478.call(this);
case  1 :
return G__3477__3479.call(this,x);
case  2 :
return G__3477__3480.call(this,x,y);
case  3 :
return G__3477__3481.call(this,x,y,z);
default:
return G__3477__3482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3477.cljs$lang$maxFixedArity = 3;
G__3477.cljs$lang$applyTo = (function (arglist__3484){
var x = cljs.core.first(arglist__3484);
var y = cljs.core.first(cljs.core.next(arglist__3484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3484)));
return G__3477__3482.call(null, x, y, z, args);
});
return G__3477;
})()
});
var juxt__3459 = (function (f,g,h,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__3455 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3485 = null;
var G__3485__3486 = (function (){
return cljs.core.reduce.call(null,(function (p1__3440_SHARP_,p2__3441_SHARP_){
return cljs.core.conj.call(null,p1__3440_SHARP_,p2__3441_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3455);
});
var G__3485__3487 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3442_SHARP_,p2__3443_SHARP_){
return cljs.core.conj.call(null,p1__3442_SHARP_,p2__3443_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3455);
});
var G__3485__3488 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3444_SHARP_,p2__3445_SHARP_){
return cljs.core.conj.call(null,p1__3444_SHARP_,p2__3445_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3455);
});
var G__3485__3489 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3446_SHARP_,p2__3447_SHARP_){
return cljs.core.conj.call(null,p1__3446_SHARP_,p2__3447_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3455);
});
var G__3485__3490 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3448_SHARP_,p2__3449_SHARP_){
return cljs.core.conj.call(null,p1__3448_SHARP_,cljs.core.apply.call(null,p2__3449_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3455);
});
G__3485 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3485__3486.call(this);
case  1 :
return G__3485__3487.call(this,x);
case  2 :
return G__3485__3488.call(this,x,y);
case  3 :
return G__3485__3489.call(this,x,y,z);
default:
return G__3485__3490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3485.cljs$lang$maxFixedArity = 3;
G__3485.cljs$lang$applyTo = (function (arglist__3492){
var x = cljs.core.first(arglist__3492);
var y = cljs.core.first(cljs.core.next(arglist__3492));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3492)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3492)));
return G__3485__3490.call(null, x, y, z, args);
});
return G__3485;
})()
});
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3456.call(this,f);
case  2 :
return juxt__3457.call(this,f,g);
case  3 :
return juxt__3458.call(this,f,g,h);
default:
return juxt__3459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = (function (arglist__3493){
var f = cljs.core.first(arglist__3493);
var g = cljs.core.first(cljs.core.next(arglist__3493));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3493)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3493)));
return juxt__3459.call(null, f, g, h, fs);
});
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3495 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3498 = cljs.core.next.call(null,coll);
coll = G__3498;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3496 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3494))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3494;
}
})()))
{{
var G__3499 = cljs.core.dec.call(null,n);
var G__3500 = cljs.core.next.call(null,coll);
n = G__3499;
coll = G__3500;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3495.call(this,n);
case  2 :
return dorun__3496.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3501 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3502 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3501.call(this,n);
case  2 :
return doall__3502.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3504 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3504),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3504),1)))
{return cljs.core.first.call(null,matches__3504);
} else
{return cljs.core.vec.call(null,matches__3504);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3505 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3505)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3505),1)))
{return cljs.core.first.call(null,matches__3505);
} else
{return cljs.core.vec.call(null,matches__3505);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3506 = cljs.core.re_find.call(null,re,s);
var match_idx__3507 = s.search(re);
var match_str__3508 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3506))?cljs.core.first.call(null,match_data__3506):match_data__3506);
var post_match__3509 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3507,cljs.core.count.call(null,match_str__3508)));

if(cljs.core.truth_(match_data__3506))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3506,re_seq.call(null,re,post_match__3509));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global.RegExp()).compile(s);
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3510_SHARP_){
return print_one.call(null,p1__3510_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3511 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3511))
{var and__3574__auto____3514 = (function (){var x__105__auto____3512 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3513 = x__105__auto____3512;

if(cljs.core.truth_(and__3574__auto____3513))
{return x__105__auto____3512.cljs$core$IMeta$;
} else
{return and__3574__auto____3513;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3512);
}
})();

if(cljs.core.truth_(and__3574__auto____3514))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3514;
}
} else
{return and__3574__auto____3511;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3515 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3516 = x__105__auto____3515;

if(cljs.core.truth_(and__3574__auto____3516))
{return x__105__auto____3515.cljs$core$IPrintable$;
} else
{return and__3574__auto____3516;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3515);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3517 = cljs.core.first.call(null,objs);
var sb__3518 = (new goog.string.StringBuffer());

var G__3519__3520 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3519__3520))
{var obj__3521 = cljs.core.first.call(null,G__3519__3520);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3521,first_obj__3517)))
{} else
{sb__3518.append(" ");
}
var G__3522__3523 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3521,opts));

while(true){
if(cljs.core.truth_(G__3522__3523))
{var string__3524 = cljs.core.first.call(null,G__3522__3523);

sb__3518.append(string__3524);
{
var G__3525 = cljs.core.next.call(null,G__3522__3523);
G__3522__3523 = G__3525;
continue;
}
} else
{}
break;
}
{
var G__3526 = cljs.core.next.call(null,G__3519__3520);
G__3519__3520 = G__3526;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3518);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3527 = cljs.core.first.call(null,objs);

var G__3528__3529 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3528__3529))
{var obj__3530 = cljs.core.first.call(null,G__3528__3529);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3530,first_obj__3527)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3531__3532 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3530,opts));

while(true){
if(cljs.core.truth_(G__3531__3532))
{var string__3533 = cljs.core.first.call(null,G__3531__3532);

cljs.core.string_print.call(null,string__3533);
{
var G__3534 = cljs.core.next.call(null,G__3531__3532);
G__3531__3532 = G__3534;
continue;
}
} else
{}
break;
}
{
var G__3535 = cljs.core.next.call(null,G__3528__3529);
G__3528__3529 = G__3535;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function pr_str(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function pr(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function cljs_core_print(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
});
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function println(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function prn(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3536 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3536,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3537 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3537))
{var nspc__3538 = temp__3726__auto____3537;

return cljs.core.str.call(null,nspc__3538,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3539 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3539))
{var nspc__3540 = temp__3726__auto____3539;

return cljs.core.str.call(null,nspc__3540,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3541 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3541,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3542 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3542.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3543 = this;
return this__3543.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3544 = this;
return this__3544.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3545 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3552 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3553 = (function (x,var_args){
var p__3546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3547__3548 = p__3546;
var map__3547__3549 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3547__3548))?cljs.core.apply.call(null,cljs.core.hash_map,map__3547__3548):map__3547__3548);
var validator__3550 = cljs.core.get.call(null,map__3547__3549,"﷐'validator");
var meta__3551 = cljs.core.get.call(null,map__3547__3549,"﷐'meta");

return (new cljs.core.Atom(x,meta__3551,validator__3550));
});
atom = function(x,var_args){
var p__3546 = var_args;
switch(arguments.length){
case  1 :
return atom__3552.call(this,x);
default:
return atom__3553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = (function (arglist__3555){
var x = cljs.core.first(arglist__3555);
var p__3546 = cljs.core.rest(arglist__3555);
return atom__3553.call(null, x, p__3546);
});
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3556 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3556))
{var v__3557 = temp__3726__auto____3556;

if(cljs.core.truth_(v__3557.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3558 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3559 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3560 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3561 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3562 = (function (a,f,x,y,z,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
});
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3558.call(this,a,f);
case  3 :
return swap_BANG___3559.call(this,a,f,x);
case  4 :
return swap_BANG___3560.call(this,a,f,x,y);
case  5 :
return swap_BANG___3561.call(this,a,f,x,y,z);
default:
return swap_BANG___3562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = (function (arglist__3564){
var a = cljs.core.first(arglist__3564);
var f = cljs.core.first(cljs.core.next(arglist__3564));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3564)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3564))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3564)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3564)))));
return swap_BANG___3562.call(null, a, f, x, y, z, more);
});
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function alter_meta_BANG_(iref,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
});
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3565 = (function (){
return gensym.call(null,"G__");
});
var gensym__3566 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3565.call(this);
case  1 :
return gensym__3566.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3568 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3568.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3569 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3569.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3569.state,this__3569.f);
}
return cljs.core.deref.call(null,this__3569.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function delay(var_args){
var body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function js__GT_clj(x,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3570__3571 = options;
var map__3570__3572 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3570__3571))?cljs.core.apply.call(null,cljs.core.hash_map,map__3570__3571):map__3570__3571);
var keywordize_keys__3573 = cljs.core.get.call(null,map__3570__3572,"﷐'keywordize-keys");
var keyfn__3574 = (cljs.core.truth_(keywordize_keys__3573)?cljs.core.keyword:cljs.core.str);
var f__3580 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3579 = (function iter__3575(s__3576){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3576__3577 = s__3576;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3576__3577)))
{var k__3578 = cljs.core.first.call(null,s__3576__3577);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3574.call(null,k__3578),thisfn.call(null,(x[k__3578]))]),iter__3575.call(null,cljs.core.rest.call(null,s__3576__3577)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3579.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3580.call(null,x);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷐'b".call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷐'b",cljs.core.hash_map("﷐'a",1,"﷐'b",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷑'b".call(null,cljs.core.hash_map("﷐'a",1,"﷑'b",2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.list("﷑'quote","﷑'b"),cljs.core.list("﷑'quote",cljs.core.hash_map("﷐'a",1,"﷑'b",2))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}).call(null,"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.HashMap.fromArrays([1,2],[1,2]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map(1,1,2,2),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.set([1,2,3]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.set([1,2,3]),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"foo/bar",cljs.core.namespace.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","foo/bar",cljs.core.list("﷑'namespace",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷐'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name","﷐'foo/bar/baz"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.get.call(null,cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2,3]),4],[cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),5]),cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'get",cljs.core.hash_map((new cljs.core.Vector(null, [1,2,3])),cljs.core.hash_map("﷐'a","﷐'b"),4,5),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'a",cljs.core.nth.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c","﷐'d"]),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'a",cljs.core.list("﷑'nth",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c","﷐'d"])),0))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":null}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'d"],{"﷐'a":"﷐'b","﷐'d":null})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b","﷐'c",null),cljs.core.hash_map("﷐'a","﷐'b","﷐'d",null)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.list.call(null,3,2,1),cljs.core.Vector.fromArray([3,2,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'list",3,2,1),(new cljs.core.Vector(null, [3,2,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.seq.call(null,cljs.core.array.call(null,3,2,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'seq",cljs.core.list("﷑'array",3,2,1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.Vector.fromArray([1])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",(new cljs.core.Vector(null, [1]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.array.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",cljs.core.list("﷑'array",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["x"],{"x":"y"}),cljs.core.meta.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["x"],{"x":"y"}))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("x","y"),cljs.core.list("﷑'meta",cljs.core.with_meta((new cljs.core.Vector(null, [])),cljs.core.hash_map("x","y"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.dissoc.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":"﷐'d"}),"﷐'c"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'dissoc",cljs.core.hash_map("﷐'a","﷐'b","﷐'c","﷐'d"),"﷐'c"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map.call(null,"﷐'foo",5),cljs.core.assoc.call(null,(new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null))),"﷐'foo",5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'hash-map","﷐'foo",5),cljs.core.list("﷑'assoc",cljs.core.list("﷑'cljs.core.ObjMap.",null,cljs.core.list("﷑'array"),cljs.core.list("﷑'js-obj")),"﷐'foo",5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.pr_str.call(null,cljs.core.Vector.fromArray([1,true,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":2,"﷐'b":42}),cljs.core.array.call(null,3,4)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.list("﷑'pr-str",(new cljs.core.Vector(null, [1,true,cljs.core.hash_map("﷐'a",2,"﷐'b",42),cljs.core.list("﷑'array",3,4)]))))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,"one","two"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=","one","two"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core._count.call(null,"abc"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'-count","abc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._count.call(null,cljs.core.array.call(null,1,2,3,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-count",cljs.core.list("﷑'array",1,2,3,4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"c",cljs.core._nth.call(null,"abc",2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","c",cljs.core.list("﷑'-nth","abc",2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"quux",cljs.core._nth.call(null,"abc",3,"quux"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","quux",cljs.core.list("﷑'-nth","abc",3,"quux"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"val",cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),4,"val"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","val",cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),4,"val"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"b",cljs.core._lookup.call(null,"abc",1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","b",cljs.core.list("﷑'-lookup","abc",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"harriet",cljs.core._lookup.call(null,"abcd",4,"harriet"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","harriet",cljs.core.list("﷑'-lookup","abcd",4,"harriet"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"zot",cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),4,"zot"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","zot",cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),4,"zot"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_,10))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+",10))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__3581 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3581);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__3582 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3582,"frog");
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cafrogbd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble","frog")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,1,0,1]),cljs.core.Vector.fromArray([cljs.core.bit_and.call(null,1,0),cljs.core.bit_and.call(null,0,0),cljs.core.bit_and.call(null,1,1),cljs.core.bit_and.call(null,42,1),cljs.core.bit_and.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,1,0,1])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and",1,0),cljs.core.list("﷑'bit-and",0,0),cljs.core.list("﷑'bit-and",1,1),cljs.core.list("﷑'bit-and",42,1),cljs.core.list("﷑'bit-and",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,1,43,41]),cljs.core.Vector.fromArray([cljs.core.bit_or.call(null,1,0),cljs.core.bit_or.call(null,0,0),cljs.core.bit_or.call(null,1,1),cljs.core.bit_or.call(null,42,1),cljs.core.bit_or.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,1,43,41])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-or",1,0),cljs.core.list("﷑'bit-or",0,0),cljs.core.list("﷑'bit-or",1,1),cljs.core.list("﷑'bit-or",42,1),cljs.core.list("﷑'bit-or",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,0,42,40]),cljs.core.Vector.fromArray([cljs.core.bit_and_not.call(null,1,0),cljs.core.bit_and_not.call(null,0,0),cljs.core.bit_and_not.call(null,1,1),cljs.core.bit_and_not.call(null,42,1),cljs.core.bit_and_not.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,0,42,40])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and-not",1,0),cljs.core.list("﷑'bit-and-not",0,0),cljs.core.list("﷑'bit-and-not",1,1),cljs.core.list("﷑'bit-and-not",42,1),cljs.core.list("﷑'bit-and-not",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,968,16649,0]),cljs.core.Vector.fromArray([cljs.core.bit_clear.call(null,1,0),cljs.core.bit_clear.call(null,2,0),cljs.core.bit_clear.call(null,1000,5),cljs.core.bit_clear.call(null,16713,6),cljs.core.bit_clear.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,968,16649,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-clear",1,0),cljs.core.list("﷑'bit-clear",2,0),cljs.core.list("﷑'bit-clear",1000,5),cljs.core.list("﷑'bit-clear",16713,6),cljs.core.list("﷑'bit-clear",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,992,18761,0]),cljs.core.Vector.fromArray([cljs.core.bit_flip.call(null,1,0),cljs.core.bit_flip.call(null,2,1),cljs.core.bit_flip.call(null,1000,3),cljs.core.bit_flip.call(null,16713,11),cljs.core.bit_flip.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,992,18761,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-flip",1,0),cljs.core.list("﷑'bit-flip",2,1),cljs.core.list("﷑'bit-flip",1000,3),cljs.core.list("﷑'bit-flip",16713,11),cljs.core.list("﷑'bit-flip",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([-2,-3,999,-16714,-1025]),cljs.core.Vector.fromArray([cljs.core.bit_not.call(null,1),cljs.core.bit_not.call(null,2),cljs.core.bit_not.call(null,-1000),cljs.core.bit_not.call(null,16713),cljs.core.bit_not.call(null,1024)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [-2,-3,999,-16714,-1025])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-not",1),cljs.core.list("﷑'bit-not",2),cljs.core.list("﷑'bit-not",-1000),cljs.core.list("﷑'bit-not",16713),cljs.core.list("﷑'bit-not",1024)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,1000,18761,1024]),cljs.core.Vector.fromArray([cljs.core.bit_set.call(null,1,0),cljs.core.bit_set.call(null,2,1),cljs.core.bit_set.call(null,1000,3),cljs.core.bit_set.call(null,16713,11),cljs.core.bit_set.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,1000,18761,1024])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-set",1,0),cljs.core.list("﷑'bit-set",2,1),cljs.core.list("﷑'bit-set",1000,3),cljs.core.list("﷑'bit-set",16713,11),cljs.core.list("﷑'bit-set",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true,true,false,true]),cljs.core.Vector.fromArray([cljs.core.bit_test.call(null,1,0),cljs.core.bit_test.call(null,2,1),cljs.core.bit_test.call(null,1000,3),cljs.core.bit_test.call(null,16713,11),cljs.core.bit_test.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true,true,false,true])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-test",1,0),cljs.core.list("﷑'bit-test",2,1),cljs.core.list("﷑'bit-test",1000,3),cljs.core.list("﷑'bit-test",16713,11),cljs.core.list("﷑'bit-test",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,false,false]),cljs.core.Vector.fromArray([cljs.core.true_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,goog.global.undefined),cljs.core.false_QMARK_.call(null,goog.global.undefined)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,false,false])),(new cljs.core.Vector(null, [cljs.core.list("﷑'true?",true),cljs.core.list("﷑'true?",false),cljs.core.list("﷑'false?",false),cljs.core.list("﷑'false?",true),cljs.core.list("﷑'true?","﷑'goog.global.undefined"),cljs.core.list("﷑'false?","﷑'goog.global.undefined")])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,cljs.core._PLUS_,1,cljs.core.list.call(null,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply","﷑'+",1,cljs.core.list("﷑'list",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,7,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,cljs.core.list.call(null,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",7,cljs.core.list("﷑'apply","﷑'+",1,2,cljs.core.list("﷑'list",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,15,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,cljs.core.list.call(null,8)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",15,cljs.core.list("﷑'apply","﷑'+",1,2,4,cljs.core.list("﷑'list",8)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,31,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,cljs.core.list.call(null,16)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",31,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,cljs.core.list("﷑'list",16)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,63,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",63,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,127,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32,64)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",127,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32,64)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4950,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4950,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'take",100,cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var a__3583 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__3583))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3583,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__3583,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__3583,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__3583))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__3583))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__3584 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3584,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__3584,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__3584,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__3584,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__3585 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__3585))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__3585))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__3585,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__3585))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__3586 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__3586)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__3586)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__3586))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__3587 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__3587)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__3587)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__3588 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__3588)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__3588)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__3588),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__3589 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__3589)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__3589)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__3589))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__3590 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__3590)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__3590)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__3590))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__3591 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__3591)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__3591)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__3591))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__3592 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__3592)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__3592)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__3592))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__3593 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__3593,(function (){var iter__159__auto____3598 = (function iter__3594(s__3595){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3595__3596 = s__3595;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3595__3596)))
{var e__3597 = cljs.core.first.call(null,s__3595__3596);

return cljs.core.cons.call(null,e__3597,iter__3594.call(null,cljs.core.rest.call(null,s__3595__3596)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3598.call(null,v__3593);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__159__auto____3604 = (function iter__3599(s__3600){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3600__3601 = s__3600;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3600__3601)))
{var e__3602 = cljs.core.first.call(null,s__3600__3601);

var m__3603 = cljs.core._STAR_.call(null,e__3602,e__3602);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3602,m__3603]),iter__3599.call(null,cljs.core.rest.call(null,s__3600__3601)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3604.call(null,v__3593);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__159__auto____3609 = (function iter__3605(s__3606){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3606__3607 = s__3606;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3606__3607)))
{var e__3608 = cljs.core.first.call(null,s__3606__3607);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3608,3)))
{return cljs.core.cons.call(null,e__3608,iter__3605.call(null,cljs.core.rest.call(null,s__3606__3607)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3609.call(null,v__3593);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__159__auto____3614 = (function iter__3610(s__3611){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3611__3612 = s__3611;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3611__3612)))
{var e__3613 = cljs.core.first.call(null,s__3611__3612);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__3613,2)))
{return cljs.core.cons.call(null,e__3613,iter__3610.call(null,cljs.core.rest.call(null,s__3611__3612)));
} else
{{
var G__3694 = cljs.core.rest.call(null,s__3611__3612);
s__3611__3612 = G__3694;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3614.call(null,v__3593);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__159__auto____3620 = (function iter__3615(s__3616){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3616__3617 = s__3616;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3616__3617)))
{var e__3618 = cljs.core.first.call(null,s__3616__3617);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3618,3)))
{var m__3619 = cljs.core._STAR_.call(null,e__3618,e__3618);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3618,m__3619]),iter__3615.call(null,cljs.core.rest.call(null,s__3616__3617)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3620.call(null,v__3593);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3),"﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,1,2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",1,2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_EQ_.call(null,1,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not=",1,1))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'boolean",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"joel",cljs.core.min_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","joel",cljs.core.list("﷑'min-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"crooooooooow",cljs.core.max_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","crooooooooow",cljs.core.list("﷑'max-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,2,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([3,4,5,6]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([7,8,9]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,2,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [3,4,5,6])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [7,8,9])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true]),cljs.core.take_while.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true])),cljs.core.list("﷑'take-while","﷑'true?",(new cljs.core.Vector(null, [true,true,2,3,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([true,true]),cljs.core.Vector.fromArray([false,false,false]),cljs.core.Vector.fromArray([true,true])]),cljs.core.partition_by.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,false,false,false,true,true])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [true,true])),(new cljs.core.Vector(null, [false,false,false])),(new cljs.core.Vector(null, [true,true]))])),cljs.core.list("﷑'partition-by","﷑'true?",(new cljs.core.Vector(null, [true,true,false,false,false,true,true]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,4,6,8,10]),cljs.core.take_nth.call(null,2,cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,4,6,8,10])),cljs.core.list("﷑'take-nth",2,(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
var a10__3621 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__3622 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__3623 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__3624 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__3625 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__3621.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__3622.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__3623.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__3624.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__3625.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__3626 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__3627 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__3628 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__3629 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__3630 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__3626.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__3627.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__3628.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__3629.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__3630.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__3631 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__3631.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__3631.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__3631.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__3631.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__3632 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__3632.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__3632.call(null,1,2,3,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'ep",1,2,3,0))));
}
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.number_QMARK_).call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list("﷑'complement","﷑'number?"),"﷐'foo")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,cljs.core.Vector.fromArray([2,3]),cljs.core.Vector.fromArray([1,2,3])]),cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest,cljs.core.seq).call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,(new cljs.core.Vector(null, [2,3])),(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list(cljs.core.list("﷑'juxt","﷑'first","﷑'rest","﷑'seq"),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,cljs.core.max.call(null,1,2,3,4,5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'max",1,2,3,4,5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5.5,cljs.core.max.call(null,1,2,3,4,5,5.5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5.5,cljs.core.list("﷑'max",1,2,3,4,5,5.5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.min.call(null,5,4,3,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'min",5,4,3,2,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0.5,cljs.core.min.call(null,5,4,3,0.5,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0.5,cljs.core.list("﷑'min",5,4,3,0.5,2,1))));
}
var x__3633 = cljs.core.array.call(null,1,2,3);

x__3633.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__3633.foo,"﷐'hello")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'.foo","﷑'x"),"﷐'hello")));
}
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.Vector.fromArray([]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'set",(new cljs.core.Vector(null, [])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core.set.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set(["foo"]),cljs.core.set.call(null,cljs.core.Vector.fromArray(["foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set(["foo"]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, ["foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]),cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]),cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.set([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.set([])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])])),5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'count",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))])),5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),1),cljs.core.set([1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),1),cljs.core.set([1]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),2),cljs.core.set([1,2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),2),cljs.core.set([1,2]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core._empty.call(null,cljs.core.set([1,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'-empty",cljs.core.set([1,2,3,4])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.set([1,2,3,4,5])),15)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'reduce","﷑'+",cljs.core.set([1,2,3,4,5])),15)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get.call(null,cljs.core.set([1,2,3,4]),4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get",cljs.core.set([1,2,3,4]),4))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([1,2,3,4]),4)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([1,2,3,4]),4)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([null,0,cljs.core.ObjMap.fromObject([],{}),cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.ObjMap.fromObject([],{}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([null,0,cljs.core.hash_map(),cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.hash_map())));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([cljs.core.Vector.fromArray([1,2,3])]),cljs.core.Vector.fromArray([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([(new cljs.core.Vector(null, [1,2,3]))]),(new cljs.core.Vector(null, [1,2,3])))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core._disjoin.call(null,cljs.core.set([1,2,3]),3),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'-disjoin",cljs.core.set([1,2,3]),3),3))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",1))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1.765)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1.765)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.integer_QMARK_,cljs.core.Vector.fromArray([1,1.00001,2023,cljs.core.Vector.fromArray([]),cljs.core._.call(null,88,1001991881),"﷐'foo",0,"0"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'integer?",(new cljs.core.Vector(null, [1,1.00001,2023,(new cljs.core.Vector(null, [])),cljs.core.list("﷑'-",88,1001991881),"﷐'foo",0,"0"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.odd_QMARK_,cljs.core.Vector.fromArray([1,2,3,4,-1,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'odd?",(new cljs.core.Vector(null, [1,2,3,4,-1,0]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,true]),cljs.core.map.call(null,cljs.core.even_QMARK_,cljs.core.Vector.fromArray([2,3,4,5,-2,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,true])),cljs.core.list("﷑'map","﷑'even?",(new cljs.core.Vector(null, [2,3,4,5,-2,0]))))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a")));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'z"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'z"))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),3))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),3))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,null,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",null,42))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,"f",0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?","f",0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,"f",55))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?","f",55))));
}
if(cljs.core.truth_(cljs.core.distinct_QMARK_.call(null,1,2,3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'distinct?",1,2,3)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.distinct_QMARK_.call(null,1,2,3,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'distinct?",1,2,3,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.List.EMPTY),cljs.core.List.EMPTY)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.List.EMPTY),cljs.core.List.EMPTY)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1)),cljs.core.list(1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1))),cljs.core.list("﷑'quote",cljs.core.list(1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1,2,3,1,1,1)),cljs.core.list(1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1,2,3,1,1,1))),cljs.core.list("﷑'quote",cljs.core.list(1,2,3)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,1,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,1,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,2,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,2,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"a"),cljs.core.Vector.fromArray(["a"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","a"),(new cljs.core.Vector(null, ["a"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"abcabab"),cljs.core.Vector.fromArray(["a","b","c"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","abcabab"),(new cljs.core.Vector(null, ["a","b","c"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["abc","abc"])),cljs.core.Vector.fromArray(["abc"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["abc","abc"]))),(new cljs.core.Vector(null, ["abc"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([null,null])),cljs.core.Vector.fromArray([null]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [null,null]))),(new cljs.core.Vector(null, [null])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([0.0,0.0])),cljs.core.Vector.fromArray([0.0]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [0.0,0.0]))),(new cljs.core.Vector(null, [0.0])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷑'sym","﷑'sym"])),(new cljs.core.Vector(null, ["﷑'sym"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote","﷑'sym"),cljs.core.list("﷑'quote","﷑'sym")]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'sym"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷐'kw","﷐'kw"])),cljs.core.Vector.fromArray(["﷐'kw"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["﷐'kw","﷐'kw"]))),(new cljs.core.Vector(null, ["﷐'kw"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([42,42])),cljs.core.Vector.fromArray([42]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [42,42]))),(new cljs.core.Vector(null, [42])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, []))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, []))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.list(1,2),cljs.core.list(1,2)])),(new cljs.core.Vector(null, [cljs.core.list(1,2)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote",cljs.core.list(1,2)),cljs.core.list("﷑'quote",cljs.core.list(1,2))]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, [cljs.core.list(1,2)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.List.EMPTY,cljs.core.List.EMPTY])),cljs.core.Vector.fromArray([cljs.core.List.EMPTY]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.List.EMPTY,cljs.core.List.EMPTY]))),(new cljs.core.Vector(null, [cljs.core.List.EMPTY])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,2])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,2]))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))),(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{}),cljs.core.ObjMap.fromObject([],{})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map(),cljs.core.hash_map()]))),(new cljs.core.Vector(null, [cljs.core.hash_map()])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([1,2]),cljs.core.set([1,2])])),cljs.core.Vector.fromArray([cljs.core.set([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([1,2]),cljs.core.set([1,2])]))),(new cljs.core.Vector(null, [cljs.core.set([1,2])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([]),cljs.core.set([])])),cljs.core.Vector.fromArray([cljs.core.set([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([]),cljs.core.set([])]))),(new cljs.core.Vector(null, [cljs.core.set([])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3634__3635 = cljs.core.Vector.fromArray([1,2]);
var a__3636 = cljs.core.nth.call(null,vec__3634__3635,0,null);
var b__3637 = cljs.core.nth.call(null,vec__3634__3635,1,null);

return cljs.core.Vector.fromArray([b__3637,a__3636]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__3638__3639 = cljs.core.Vector.fromArray([1,2]);
var a__3640 = cljs.core.nth.call(null,vec__3638__3639,0,null);
var b__3641 = cljs.core.nth.call(null,vec__3638__3639,1,null);

return cljs.core.set([a__3640,b__3641]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3642__3643 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3642__3644 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3642__3643))?cljs.core.apply.call(null,cljs.core.hash_map,map__3642__3643):map__3642__3643);
var a__3645 = cljs.core.get.call(null,map__3642__3644,"﷐'a");
var b__3646 = cljs.core.get.call(null,map__3642__3644,"﷐'b");

return cljs.core.Vector.fromArray([a__3645,b__3646]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3647__3648 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3647__3649 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3647__3648))?cljs.core.apply.call(null,cljs.core.hash_map,map__3647__3648):map__3647__3648);
var b__3650 = cljs.core.get.call(null,map__3647__3649,"﷐'b");
var a__3651 = cljs.core.get.call(null,map__3647__3649,"﷐'a");

return cljs.core.Vector.fromArray([a__3651,b__3650]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__3652__3653 = cljs.core.Vector.fromArray([1,2]);
var a__3654 = cljs.core.nth.call(null,vec__3652__3653,0,null);
var b__3655 = cljs.core.nth.call(null,vec__3652__3653,1,null);
var v__3656 = vec__3652__3653;

return cljs.core.Vector.fromArray([a__3654,b__3655,v__3656]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__3657__3658 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3657__3659 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3657__3658))?cljs.core.apply.call(null,cljs.core.hash_map,map__3657__3658):map__3657__3658);
var b__3660 = cljs.core.get.call(null,map__3657__3659,"﷐'b",42);
var a__3661 = cljs.core.get.call(null,map__3657__3659,"﷐'a");

return cljs.core.Vector.fromArray([a__3661,b__3660]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__3662__3663 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3662__3664 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3662__3663))?cljs.core.apply.call(null,cljs.core.hash_map,map__3662__3663):map__3662__3663);
var b__3665 = cljs.core.get.call(null,map__3662__3664,"﷐'b");
var a__3666 = cljs.core.get.call(null,map__3662__3664,"﷐'a");

return cljs.core.Vector.fromArray([a__3666,b__3665]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3667__3668 = cljs.core.list(1,2);
var a__3669 = cljs.core.nth.call(null,vec__3667__3668,0,null);
var b__3670 = cljs.core.nth.call(null,vec__3667__3668,1,null);

return cljs.core.Vector.fromArray([b__3670,a__3669]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__3671__3672 = cljs.core.Vector.fromArray([1,2]);
var a__3673 = cljs.core.nth.call(null,vec__3671__3672,0,null);
var b__3674 = cljs.core.nth.call(null,vec__3671__3672,1,null);

return cljs.core.HashMap.fromArrays([a__3673],[b__3674]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3675__3676 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__3677 = cljs.core.nth.call(null,vec__3675__3676,0,null);
var b__3678 = cljs.core.nth.call(null,vec__3675__3676,1,null);

return cljs.core.Vector.fromArray([b__3678,a__3677]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'seq",(new cljs.core.Vector(null, [1,2])))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1})})}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",1))),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":10}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),cljs.core._PLUS_,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",10),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),"﷑'+",7))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":3})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",3)])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":3})})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})})]),cljs.core.Vector.fromArray([1,"﷐'foo","﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",3))])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2))])),(new cljs.core.Vector(null, [1,"﷐'foo","﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})})}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",100))),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":100}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",100),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})])})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])})]),cljs.core.Vector.fromArray([1,"﷐'foo",1,"﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",100)])))])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)])))])),(new cljs.core.Vector(null, [1,"﷐'foo",1,"﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":100})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",100)])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.Vector.fromArray(["﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),(new cljs.core.Vector(null, ["﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":1}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":2})]),cljs.core.Vector.fromArray([0,"﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1),cljs.core.hash_map("﷐'foo",2)])),(new cljs.core.Vector(null, [0,"﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":2})])}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":3,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":4})])})]),cljs.core.Vector.fromArray([1,"﷐'bar",1,"﷐'buzz"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",1),cljs.core.hash_map("﷐'buzz",2)]))),cljs.core.hash_map("﷐'foo",3,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",3),cljs.core.hash_map("﷐'buzz",4)])))])),(new cljs.core.Vector(null, [1,"﷐'bar",1,"﷐'buzz"]))))));
}
var a__3679 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__192__auto____3680 = a__3679;
var ret__3681 = cljs.core.aclone.call(null,a__192__auto____3680);

var i__3682 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3682,cljs.core.alength.call(null,a__192__auto____3680))))
{(ret__3681[i__3682] = cljs.core._STAR_.call(null,10,(a__3679[i__3682])));
{
var G__3695 = cljs.core.inc.call(null,i__3682);
i__3682 = G__3695;
continue;
}
} else
{return ret__3681;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__198__auto____3683 = a__3679;

var i__3684 = 0;
var ret__3685 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3684,cljs.core.alength.call(null,a__198__auto____3683))))
{{
var G__3696 = cljs.core.inc.call(null,i__3684);
var G__3697 = cljs.core._PLUS_.call(null,ret__3685,(a__3679[i__3684]));
i__3684 = G__3696;
ret__3685 = G__3697;
continue;
}
} else
{return ret__3685;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__3679),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__3679[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__3679),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__3679,cljs.core.aclone.call(null,a__3679))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'a",cljs.core.list("﷑'aclone","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core._LT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort","﷑'<",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,4,3,2,1]),cljs.core.sort.call(null,cljs.core._GT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,4,3,2,1])),cljs.core.list("﷑'sort","﷑'>",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["a",cljs.core.Vector.fromArray([1,2]),"foo"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["a",(new cljs.core.Vector(null, [1,2])),"foo"])),cljs.core.list("﷑'sort-by","﷑'count",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["foo",cljs.core.Vector.fromArray([1,2]),"a"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["foo",(new cljs.core.Vector(null, [1,2])),"a"])),cljs.core.list("﷑'sort-by","﷑'count","﷑'>",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["a","b"],{"a":1,"b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("a",1,"b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2},"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,[[{"a":1,"b":2}, {"a":1,"b":2}]],"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","[[{\"a\":1,\"b\":2}, {\"a\":1,\"b\":2}]]"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,null,cljs.core.last.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",null,cljs.core.list("﷑'last",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.last.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'last",(new cljs.core.Vector(null, [1,2,3]))))));
}
var s__3686 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__204__auto____3687 = 5;

var n__3688 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__3688,n__204__auto____3687)))
{cljs.core.swap_BANG_.call(null,s__3686,cljs.core.conj,n__3688);
{
var G__3698 = cljs.core.inc.call(null,n__3688);
n__3688 = G__3698;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__3686))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__3689 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__3690 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__3691__3692 = cljs.core.seq.call(null,v__3689);

while(true){
if(cljs.core.truth_(G__3691__3692))
{var n__3693 = cljs.core.first.call(null,G__3691__3692);

cljs.core.swap_BANG_.call(null,s__3690,cljs.core.conj,n__3693);
{
var G__3699 = cljs.core.next.call(null,G__3691__3692);
G__3691__3692 = G__3699;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__3690),cljs.core.reverse.call(null,v__3689))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'clojure.core/deref","﷑'s"),cljs.core.list("﷑'reverse","﷑'v"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2,3,4))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([42,2]),cljs.core.assoc.call(null,cljs.core.Vector.fromArray([1,2]),0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [42,2])),cljs.core.list("﷑'assoc",(new cljs.core.Vector(null, [1,2])),0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),1,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),1,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.disj.call(null,cljs.core.set([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'a"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),"﷐'a"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'b"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'b"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'b"),cljs.core.Vector.fromArray(["﷐'b",2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"),(new cljs.core.Vector(null, ["﷐'b",2])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'c"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'c"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.Vector.fromArray([1,2,3]),0),cljs.core.Vector.fromArray([0,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",(new cljs.core.Vector(null, [1,2,3])),0),(new cljs.core.Vector(null, [0,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,4,2),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",4,2),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,6,4),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",6,4),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,-5),-8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,-5),-8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-42,-5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-42,-5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,3),3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,3),3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,-3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,-3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-9,3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-9,3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,2,-5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",2,-5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-2,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-2,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,6,4),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",6,4),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3216478362187432,432143214),120355456)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3216478362187432,432143214),120355456)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,-5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,-5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3,5],[2,4,6]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),cljs.core.HashMap.fromArrays([5],[6])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4,5,6),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),cljs.core.hash_map(5,6)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),null))));
}
return "﷐'ok";
});
