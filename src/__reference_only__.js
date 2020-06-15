/****************************************************************************
 This code is copyright (C) Raudas Hugbunadur ehf (Red Ace Software LLC)
 
 This code is NOT open source, and it is NOT permitted to use it on other
 sites, modify it, or otherwise use it for any other purpose than playing
 on one of our sites, (https://cardgames.io, https://iochess.com)
 
 I've had to deal with multiple people stealing my work and I'm sick of it.
 Don't be a dick, write your own game!
*****************************************************************************/
!(function r(s, o, l) {
    function d(t, e) {
        if (!o[t]) {
            if (!s[t]) {
                var a = "function" == typeof require && require;
                if (!e && a) return a(t, !0);
                if (c) return c(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            var i = (o[t] = {
                exports: {},
            });
            s[t][0].call(
                i.exports,
                function (e) {
                    return d(s[t][1][e] || e);
                },
                i,
                i.exports,
                r,
                s,
                o,
                l
            );
        }
        return o[t].exports;
    }
    for (
        var c = "function" == typeof require && require, e = 0;
        e < l.length;
        e++
    )
        d(l[e]);
    return d;
})(
    {
        1: [
            function (e, t, a) {
                "use strict";
                var r = e("./helper-functions").captainsLog,
                    o = function (t, e, a, n, i) {
                        "undefined" != typeof APP_MODE &&
                            APP_MODE &&
                            (t = "https://cardgames.io" + t),
                            (a =
                                a ||
                                function () {
                                    r.debug(
                                        "Successfully posted to this url: " +
                                            t +
                                            " with this data : " +
                                            JSON.stringify(e)
                                    );
                                }),
                            (n =
                                n ||
                                function (e) {
                                    console.log("ERROR for urL " + t),
                                        r.error("ERROR: " + JSON.stringify(e));
                                }),
                            $.ajax({
                                type: "POST",
                                url: t,
                                headers: i || {},
                                data: JSON.stringify(e),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: a,
                                error: n,
                            });
                    },
                    s = function (e, t, a) {
                        if (
                            ("undefined" != typeof APP_MODE &&
                                APP_MODE &&
                                (e = "https://cardgames.io" + e),
                            !t)
                        )
                            throw new TypeError("Success handler missing");
                        return (
                            (a =
                                a ||
                                function (e) {
                                    r.error(JSON.stringify(e));
                                }),
                            $.ajax({
                                type: "GET",
                                url: e,
                                success: t,
                                error: a,
                            })
                        );
                    },
                    n = {
                        avatars: {
                            getStats: function (e, t) {
                                return s("/api/avatars/", e, t);
                            },
                            getLatest: function (e, t) {
                                return s("/api/avatars/latest", e, t);
                            },
                            saveFace: function (e, t, a) {
                                var n = {
                                    code: e,
                                    userAgent: navigator.userAgent,
                                };
                                o("/api/avatars/", n, t, a);
                            },
                        },
                        adfree: {
                            getCode: function (e, t, a) {
                                return s("/api/adfree/" + e, t, a);
                            },
                            activateCode: function (e, t, a) {
                                return o(
                                    "/api/adfree/" + e + "/activate",
                                    {
                                        code: e,
                                    },
                                    t,
                                    a
                                );
                            },
                        },
                        gdpr: {
                            accept: function (e, t, a, n) {
                                return o(
                                    "/api/gdpr/accept",
                                    {
                                        allowPersonalizedAds: e,
                                        userAgent: t,
                                    },
                                    a,
                                    n
                                );
                            },
                        },
                        country: {
                            get: function (e, t) {
                                return s("/lambda/country/", e, t);
                            },
                        },
                        errors: {
                            getLatest: function (e, t) {
                                return s("/api/errors/latest", e, t);
                            },
                            getByName: function (e, t, a) {
                                return s("/api/errors/" + e, t, a);
                            },
                            log: function (e, t, a, n, i, r) {
                                void 0 === r && (r = 0);
                                var s = {
                                    name: e,
                                    slug: t,
                                    errorMessage: a,
                                    url: location.href,
                                    userAgent: navigator.userAgent,
                                    maxMailCount: r,
                                };
                                o("/api/errors", s, n, i);
                            },
                        },
                        events: {
                            post: function (e, t, a) {
                                o("/api/events/", e, t, a);
                            },
                        },
                        numberedGames: {
                            win: function (e, t, a, n, i) {
                                return (
                                    (a = a.replace(/ /g, "-")),
                                    o(
                                        "/api/" +
                                            t +
                                            "/" +
                                            a +
                                            "/numberedgames/" +
                                            e +
                                            "/win",
                                        n,
                                        i
                                    )
                                );
                            },
                            postSaveResult: function (e, t, a, n, i, r) {
                                return (
                                    (n = n.replace(/ /g, "-")),
                                    o(
                                        "/api/" +
                                            a +
                                            "/" +
                                            n +
                                            "/numberedgames/" +
                                            t +
                                            "/saveresult",
                                        e,
                                        i,
                                        r
                                    )
                                );
                            },
                            start: function (e, t, a, n, i) {
                                return (
                                    (a = a.replace(/ /g, "-")),
                                    o(
                                        "/api/" +
                                            t +
                                            "/" +
                                            a +
                                            "/numberedgames/" +
                                            e +
                                            "/start",
                                        n,
                                        i
                                    )
                                );
                            },
                            getGame: function (e, t, a, n, i) {
                                return (
                                    (a = a.replace(/ /g, "-")),
                                    s(
                                        "/api/" +
                                            t +
                                            "/" +
                                            a +
                                            "/numberedgames/" +
                                            e,
                                        n,
                                        i
                                    )
                                );
                            },
                            getStats: function (e, t, a, n) {
                                return (
                                    (t = t.replace(/ /g, "-")),
                                    s(
                                        "/api/" +
                                            e +
                                            "/" +
                                            t +
                                            "//numberedgames/stats",
                                        a,
                                        n
                                    )
                                );
                            },
                        },
                        visitors: {
                            post: function (e, t, a) {
                                return o("/api/visitors", e, t, a);
                            },
                        },
                        badWords: {
                            get: function (e, t) {
                                return s("/api/badwords", e, t);
                            },
                        },
                    };
                t.exports = n;
            },
            {
                "./helper-functions": 8,
            },
        ],
        2: [
            function (e, t, a) {
                "use strict";
                var n = (function () {
                    function e(e, t) {
                        if (
                            ((this.playable = !1),
                            (this.shortName = e + t),
                            (this.suit = e),
                            (this.rank = t),
                            "bj" == e)
                        )
                            return (
                                (this.longName = "black joker"),
                                void (this.shortName = "BJ")
                            );
                        if ("rj" == e)
                            return (
                                (this.longName = "red joker"),
                                void (this.shortName = "RJ")
                            );
                        (this.red = "h" == e || "d" == e),
                            (this.black = "s" == e || "c" == e);
                        var a = {
                                h: "heart",
                                s: "spade",
                                d: "diamond",
                                c: "club",
                            },
                            n = {
                                11: "jack",
                                12: "queen",
                                13: "king",
                                1: "ace",
                                14: "ace",
                            };
                        (this.suitName = a[this.suit]),
                            n[t]
                                ? ((this.longName = n[t] + " of " + a[e] + "s"),
                                  (this[n[t]] = !0))
                                : (this.longName = t + " of " + a[e] + "s"),
                            (this.shortName =
                                this.suit.toUpperCase() + this.rank),
                            (this.isSpade = "s" === e),
                            (this.isHeart = "h" === e),
                            (this.isDiamond = "d" === e),
                            (this.isClub = "c" === e),
                            (this.isJack = 11 === t),
                            (this.isQueen = 12 === t),
                            (this.isKing = 13 === t),
                            (this.isAce = 1 === t || 14 === t);
                    }
                    var t = e.prototype;
                    return (
                        (t.toString = function () {
                            return this.shortName;
                        }),
                        (t.rankName = function () {
                            return [
                                null,
                                null,
                                "a two",
                                "a three",
                                "a four",
                                "a five",
                                "a six",
                                "a seven",
                                "an eight",
                                "a nine",
                                "a ten",
                                "a jack",
                                "a queen",
                                "a king",
                                "an ace",
                            ][this.rank];
                        }),
                        (t.shortRankName = function () {
                            return [
                                null,
                                null,
                                "two",
                                "three",
                                "four",
                                "five",
                                "six",
                                "seven",
                                "eight",
                                "nine",
                                "ten",
                                "jack",
                                "queen",
                                "king",
                                "ace",
                            ][this.rank];
                        }),
                        (t.symbol = function () {
                            return (
                                {
                                    h: "♥︎",
                                    s: "♠︎",
                                    d: "♦︎",
                                    c: "♣︎",
                                }[this.suit] +
                                ({
                                    1: "A",
                                    11: "J",
                                    12: "Q",
                                    13: "K",
                                    14: "A",
                                }[this.rank] || this.rank)
                            );
                        }),
                        e
                    );
                })();
                t.exports = n;
            },
            {},
        ],
        3: [
            function (e, t, a) {
                "use strict";
                var n = e("../helper-functions"),
                    r = n.ArrayUtils,
                    i = n.captainsLog,
                    s = n.dataBind,
                    l = e("./card"),
                    o = (function () {
                        function e(e) {
                            (this.cardCount = 8),
                                (this.defaultPlayerCount = 2),
                                (this.canChangePlayerCount = !1),
                                (this.acesHigh = !0),
                                (this.mayAlwaysDraw = !1),
                                (this.canSortDesc = !0),
                                (this.players = []),
                                (this.deck = null),
                                (this.pile = null),
                                (this.allCards = null),
                                (this.currentPlayerIndex = 0),
                                (this.dealtCardCount = 0),
                                (this.nextPlayerToDealTo = 0),
                                (this.dealerIndex = -1),
                                (this.lastDealerIndex = -1),
                                this.initDefaultRenderers(),
                                (this.customCardClass = e);
                        }
                        var t = e.prototype;
                        return (
                            (t.makeRenderFunc = function (a) {
                                return function (e) {
                                    var t = s(a, e);
                                    i.debug("RENDEREVENT: " + t),
                                        setTimeout(e.callback, 0);
                                };
                            }),
                            (t.initDefaultRenderers = function () {
                                (this.renderers = {}),
                                    (this.renderers.deckready = this.makeRenderFunc(
                                        "deckready"
                                    )),
                                    (this.renderers.dealcard = this.makeRenderFunc(
                                        "dealcard - @card - @player.name - hand: @player.hand"
                                    )),
                                    (this.renderers.selectcard = this.makeRenderFunc(
                                        "selectcard - @card - @player.name"
                                    )),
                                    (this.renderers.unselectcard = this.makeRenderFunc(
                                        "unselectcard - @card - @player.name"
                                    )),
                                    (this.renderers.start = this.makeRenderFunc(
                                        "start"
                                    )),
                                    (this.renderers.playerturn = this.makeRenderFunc(
                                        "playerturn - @player.name"
                                    )),
                                    (this.renderers.play = this.makeRenderFunc(
                                        "play - @player.name played @cards - hand: @player.hand"
                                    )),
                                    (this.renderers.draw = this.makeRenderFunc(
                                        "draw - @card - @player.name"
                                    )),
                                    (this.renderers.pass = this.makeRenderFunc(
                                        "pass - @player.name"
                                    )),
                                    (this.renderers.win = this.makeRenderFunc(
                                        "win - @player.name"
                                    )),
                                    (this.renderers.win = this.makeRenderFunc(
                                        "startagain"
                                    )),
                                    (this.renderers.sorthand = this.makeRenderFunc(
                                        "sorthand - @player.name - @player.hand"
                                    )),
                                    (this.renderers.illegalcard = this.makeRenderFunc(
                                        "illegalcard - @player.name - @card"
                                    )),
                                    (this.renderers.pickdealer = this.makeRenderFunc(
                                        "pickdealer - @player.name"
                                    )),
                                    (this.renderers.forcequit = this.makeRenderFunc(
                                        "forcequit - @player.name forcequits the game - @reason"
                                    ));
                            }),
                            (t.message = function () {}),
                            (t.renderEvent = function (e, t, a) {
                                (a = a || {}).player ||
                                    (a.player = this.currentPlayer()),
                                    (a.name = e);
                                var n = (a.game = this);
                                if (
                                    ((a.callback = function () {
                                        t.call(n);
                                    }),
                                    !this.renderers[e])
                                )
                                    throw "No renderer for event: " + e;
                                this.renderers[e](a);
                            }),
                            (t.setEventRenderer = function (e, t) {
                                this.renderers[e] = t;
                            }),
                            (t.getPlayableCards = function (e) {
                                return e.hand.filter(function (e) {
                                    return e.playable;
                                });
                            }),
                            (t.playCards = function (e, t) {
                                var a = t,
                                    n = Array.isArray(a),
                                    i = 0;
                                for (a = n ? a : a[Symbol.iterator](); ; ) {
                                    var r;
                                    if (n) {
                                        if (i >= a.length) break;
                                        r = a[i++];
                                    } else {
                                        if ((i = a.next()).done) break;
                                        r = i.value;
                                    }
                                    var s = r;
                                    if (!this.canPlayCard(e, s))
                                        throw (
                                            "Illegal card from " +
                                            e.name +
                                            ", " +
                                            s
                                        );
                                    if (
                                        (this.pile.push(s),
                                        (s.selected = !1),
                                        !this.removeCard(e, s))
                                    )
                                        throw (
                                            "Card " +
                                            s +
                                            " is not held by player " +
                                            e.name
                                        );
                                }
                                (e.selectedCards = []),
                                    (e.canPlay = !1),
                                    this.renderEvent(
                                        "play",
                                        this.afterPlayCards,
                                        {
                                            player: e,
                                            cards: t,
                                        }
                                    );
                            }),
                            (t.removeCard = function (e, t) {
                                return r.remove(e.hand, t);
                            }),
                            (t.afterPlayCards = function () {
                                this.nextPlayerTurn();
                            }),
                            (t.useIllegalCard = function (e, t) {
                                this.renderEvent(
                                    "illegalcard",
                                    function () {},
                                    {
                                        player: e,
                                        card: t,
                                    }
                                );
                            }),
                            (t.selectCard = function (e, t, a) {
                                if (!e.hand.includes(t))
                                    throw "Player can't select a card he doesn't hold!";
                                if (t.selected)
                                    throw "Card is already selected!";
                                e.selectedCards === this.undefined &&
                                    (e.selectedCards = []),
                                    (t.selected = !0),
                                    e.selectedCards.push(t),
                                    this.renderEvent(
                                        "selectcard",
                                        a || function () {},
                                        {
                                            card: t,
                                            player: e,
                                        }
                                    );
                            }),
                            (t.unselectCard = function (e, t, a) {
                                if (!e.hand.includes(t))
                                    throw "Player can't unselect a card he doesn't hold!";
                                if (!t.selected) throw "Card is not selected!";
                                (t.selected = !1),
                                    r.remove(e.selectedCards, t),
                                    this.renderEvent(
                                        "unselectcard",
                                        a || function () {},
                                        {
                                            card: t,
                                            player: e,
                                        }
                                    );
                            }),
                            (t.sortHand = function (e, t, a) {
                                if (e.hand) {
                                    var n = {
                                            h: 0,
                                            s: 1,
                                            d: 2,
                                            c: 3,
                                        },
                                        i = e.hand.toString(),
                                        r = function (e, t) {
                                            return e - t;
                                        },
                                        s = function (e, t) {
                                            return e.suit === t.suit
                                                ? r(e.rank, t.rank)
                                                : r(n[e.suit], n[t.suit]);
                                        };
                                    "rank" === this.sortType &&
                                        (s = function (e, t) {
                                            return e.rank === t.rank
                                                ? r(n[e.suit], n[t.suit])
                                                : r(e.rank, t.rank);
                                        }),
                                        e.hand.sort(s),
                                        e.hand.toString() === i &&
                                            this.canSortDesc &&
                                            ((r = function (e, t) {
                                                return t - e;
                                            }),
                                            e.hand.sort(s)),
                                        a ||
                                            this.renderEvent(
                                                "sorthand",
                                                t || function () {},
                                                {
                                                    player: e,
                                                }
                                            );
                                }
                            }),
                            (t.drawCard = function (e) {
                                e.hand.push(this.deck.pop()),
                                    (e.handSorted = !1),
                                    (e.canPlay = !1),
                                    this.renderEvent("draw", this.playerPlay, {
                                        card: e.hand[e.hand.length - 1],
                                        cardpos: e.hand.length - 1,
                                    });
                            }),
                            (t.currentPlayerTurn = function () {
                                this.beforePlayerTurn(this.currentPlayer()),
                                    this.renderEvent(
                                        "playerturn",
                                        this.playerPlay
                                    );
                            }),
                            (t.playerDraw = function (e) {
                                e.draw();
                            }),
                            (t.playerPlay = function () {
                                var e = this.currentPlayer(),
                                    t = [],
                                    a = e.hand,
                                    n = Array.isArray(a),
                                    i = 0;
                                for (a = n ? a : a[Symbol.iterator](); ; ) {
                                    var r;
                                    if (n) {
                                        if (i >= a.length) break;
                                        r = a[i++];
                                    } else {
                                        if ((i = a.next()).done) break;
                                        r = i.value;
                                    }
                                    var s = r;
                                    (s.playable = this.canPlayCard(e, s)),
                                        s.playable && t.push(s);
                                }
                                if (
                                    ((e.canPlay = !0),
                                    (e.hasPlayableCards = 0 < t.length),
                                    0 === t.length)
                                )
                                    if (this.mustSayPass(e))
                                        this.renderEvent(
                                            "pass",
                                            this.nextPlayerTurn
                                        );
                                    else {
                                        if (!this.mustDraw(e))
                                            throw "Game must implement mustSayPass or mustDraw correctly";
                                        this.playerDraw(e);
                                    }
                                else this.currentPlayer().play(t);
                            }),
                            (t.nextPlayerTurn = function () {
                                var e = this.currentPlayer();
                                this.hasWon(e)
                                    ? ("bottom-player" === e.id
                                          ? this.message("You win!")
                                          : this.message(e.name + " wins!"),
                                      this.renderEvent("win", function () {}))
                                    : ((this.currentPlayerIndex = this.pickNextPlayerIndex()),
                                      this.isNewRoundStarting() && this.round++,
                                      this.currentPlayerTurn());
                            }),
                            (t.abandon = function (e) {
                                this.forceQuit(e, "abandon");
                            }),
                            (t.timeout = function (e) {
                                this.forceQuit(e, "timeout");
                            }),
                            (t.localTimeout = function (e) {
                                this.forceQuit(e, "localtimeout");
                            }),
                            (t.concede = function (e) {
                                this.forceQuit(e, "concede");
                            }),
                            (t.forceQuit = function (e, t) {
                                var a,
                                    n,
                                    i,
                                    r = this.players,
                                    s = r[0],
                                    o = r[1];
                                e === s
                                    ? ((a = o),
                                      (n = s),
                                      "concede" === t
                                          ? (i =
                                                "You concede, " +
                                                o.name +
                                                " wins the game!")
                                          : "timeout" === t
                                          ? (i =
                                                "You timed out, " +
                                                o.name +
                                                " wins the game!")
                                          : "abandon" === t &&
                                            (i =
                                                "You disconnected, " +
                                                o.name +
                                                " wins the game!"))
                                    : ("concede" === t
                                          ? (i =
                                                o.name +
                                                " concedes the game, you win!")
                                          : "timeout" === t ||
                                            "localtimeout" === t
                                          ? (i =
                                                o.name +
                                                " timed out, you win the game!")
                                          : "abandon" === t &&
                                            (i =
                                                o.name +
                                                " disconnected, you win the game!"),
                                      (a = s),
                                      (n = o)),
                                    this.message(i),
                                    this.renderEvent(
                                        "forcequit",
                                        function () {
                                            this.renderEvent(
                                                "win",
                                                function () {},
                                                {
                                                    player: a,
                                                    loser: n,
                                                    winType: t,
                                                }
                                            ),
                                                (this.renderEvent = function () {});
                                        },
                                        {
                                            player: e,
                                            reason: t,
                                        }
                                    );
                            }),
                            (t.addPlayer = function (e) {
                                (e.game = this),
                                    (e.pos = this.players.length),
                                    this.players.push(e);
                            }),
                            (t.getNextPlayer = function (e) {
                                var t = this.players.indexOf(e);
                                return this.players[this.nextIndex(t)];
                            }),
                            (t.start = function () {
                                (this.pile = []),
                                    (this.round = 0),
                                    this.newDeck();
                            }),
                            (t.startAgain = function () {
                                var e = this.players,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    var i = n;
                                    i.hand && (i.hand = []),
                                        i.tricks && (i.tricks = []),
                                        i.showCards &&
                                            "bottom-player" !== i.id &&
                                            delete i.showCards,
                                        i.selectedCards &&
                                            (i.selectedCards = []),
                                        i.points && (i.points = 0),
                                        i.results && (i.results = []),
                                        (i.stats = {});
                                }
                                (this.dealtCardCount = 0),
                                    (this.nextPlayerToDealTo = 0),
                                    (this.handSorted = !1);
                                var r = this.players.map(function (e) {
                                    return e.id;
                                });
                                this.pickDealer(r),
                                    this.beforeNewRound &&
                                        this.beforeNewRound(),
                                    this.renderEvent("startagain", this.start);
                            }),
                            (t.pickDealer = function (e) {
                                0 <= this.lastDealerIndex
                                    ? (this.dealerIndex =
                                          (this.lastDealerIndex + 1) % e.length)
                                    : (this.dealerIndex = Math.floor(
                                          Math.random() * e.length
                                      )),
                                    (this.nextPlayerToDealTo =
                                        (this.dealerIndex + 1) % e.length),
                                    this.renderEvent(
                                        "pickdealer",
                                        function () {},
                                        {
                                            dealerId: e[this.dealerIndex],
                                        }
                                    );
                            }),
                            (t.afterDealing = function () {
                                (this.currentPlayerIndex = this.pickFirstPlayerIndex()),
                                    this.renderEvent(
                                        "start",
                                        this.currentPlayerTurn
                                    );
                            }),
                            (t.currentPlayer = function () {
                                return this.players[this.currentPlayerIndex];
                            }),
                            (t.newDeck = function (e) {
                                void 0 === e && (e = -1),
                                    (this.deck = []),
                                    (this.allCards = []);
                                var t = this.acesHigh ? 2 : 1;
                                this.customCardClass &&
                                    (l = this.customCardClass);
                                for (var a = 12 + t, n = t; n <= a; n++)
                                    this.deck.push(new l("h", n)),
                                        this.deck.push(new l("s", n)),
                                        this.deck.push(new l("d", n)),
                                        this.deck.push(new l("c", n));
                                if (
                                    ((this.allCards = this.deck.slice()),
                                    this.deckCode)
                                ) {
                                    for (
                                        var i = [], r = 0;
                                        r < this.deck.length;
                                        r++
                                    ) {
                                        var s = this.deck[r],
                                            o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                                                r
                                            );
                                        i[this.deckCode.indexOf(o)] = s;
                                    }
                                    this.deck = i;
                                } else this.shuffle(this.deck, e);
                                this.processNewDeck && this.processNewDeck(),
                                    this.renderEvent(
                                        "deckready",
                                        function () {}
                                    );
                            }),
                            (t.shuffle = function (e, t) {
                                void 0 === t && (t = -1), r.shuffle(e, t);
                            }),
                            (t.deal = function () {
                                if (
                                    this.dealtCardCount ===
                                    this.cardCount * this.players.length
                                )
                                    this.afterDealing();
                                else {
                                    var e,
                                        t = this.players[
                                            this.nextPlayerToDealTo
                                        ];
                                    (e = this.fixedCards
                                        ? this.getFixedCard(t)
                                        : this.deck.pop()),
                                        t.hand.push(e),
                                        (this.nextPlayerToDealTo = this.nextIndex(
                                            this.nextPlayerToDealTo
                                        )),
                                        this.dealtCardCount++,
                                        this.renderEvent(
                                            "dealcard",
                                            this.deal,
                                            {
                                                player: t,
                                                cardpos: t.hand.length - 1,
                                                card: e,
                                            }
                                        );
                                }
                            }),
                            (t.getFixedCard = function (e) {
                                var t,
                                    a = this.fixedCards[e.id];
                                if (a && 0 < a.length) {
                                    var n = a.pop();
                                    if (
                                        !(t = this.deck.find(function (e) {
                                            return e.shortName === n;
                                        }))
                                    )
                                        throw (
                                            "CARD " +
                                            n +
                                            " is no longer in the deck!"
                                        );
                                    return r.remove(this.deck, t), t;
                                }
                                for (var i = this.deck.length - 1; 0 <= i; i--)
                                    if (
                                        ((t = this.deck[i]),
                                        !this.fixedCards.all.includes(
                                            t.shortName
                                        ))
                                    )
                                        return r.remove(this.deck, t), t;
                                throw "Could not find any card for " + e;
                            }),
                            (t.pickFirstPlayerIndex = function () {
                                return this.nextIndex(this.dealerIndex);
                            }),
                            (t.hasWon = function () {
                                return !1;
                            }),
                            (t.beforePlayerTurn = function () {}),
                            (t.canPlayCard = function () {
                                return !0;
                            }),
                            (t.canSelectCard = function () {
                                return !0;
                            }),
                            (t.mustSayPass = function () {
                                return !1;
                            }),
                            (t.mustDraw = function () {
                                return !1;
                            }),
                            (t.nextIndex = function (e) {
                                return (e + 1) % this.players.length;
                            }),
                            (t.pickNextPlayerIndex = function () {
                                return this.nextIndex(this.currentPlayerIndex);
                            }),
                            (t.isNewRoundStarting = function () {
                                return 0 === this.currentPlayerIndex;
                            }),
                            e
                        );
                    })();
                t.exports = o;
            },
            {
                "../helper-functions": 8,
                "./card": 2,
            },
        ],
        4: [
            function (e, t, a) {
                "use strict";
                var h = e("./card"),
                    w = e("../util"),
                    n = e("../helper-functions"),
                    g = n.captainsLog,
                    d = n._setTimeout,
                    f = n.ArrayUtils,
                    i = e("../game"),
                    r = i.HTML_CARD_SUITS,
                    s = i.makeAllPlayersHappy,
                    o = i.SPEED,
                    l = e("../gamecontrol"),
                    c = {
                        TABLE_SIZE: {
                            width: 700,
                            height: 600,
                        },
                        CARD_SIZE: {
                            width: 69,
                            height: 94,
                        },
                        TRICK_SIZE: {
                            width: 33,
                            height: 45,
                        },
                        CONDENSE_COUNT: 6,
                        DECK_POS: null,
                        PILE_POS: null,
                        TRICK_POS: null,
                        CARD_PADDING: 18,
                        HORIZONTAL_MARGIN: 60,
                        VERTICAL_MARGIN: 80,
                        OVERLAY_MARGIN: 2,
                        LEFT: "left",
                        RIGHT: "right",
                        TOP: "top",
                        BOTTOM: "bottom",
                        TOP_PLAYER_CARD_SIZE: null,
                        BOTTOM_PLAYER_CARD_SIZE: null,
                        LEFT_PLAYER_CARD_SIZE: null,
                        RIGHT_PLAYER_CARD_SIZE: null,
                        SIDE_PLAYER_VERTICAL_LINE: 270,
                        BOTTOM_PLAYER_TOP: null,
                        TOP_PLAYER_TOP: null,
                        LEFT_PLAYER_TOP: null,
                        RIGHT_PLAYER_TOP: null,
                        BOTTOM_PLAYER_LEFT: null,
                        TOP_PLAYER_LEFT: null,
                        LEFT_PLAYER_LEFT: null,
                        RIGHT_PLAYER_LEFT: null,
                    },
                    P = c,
                    y = {
                        ANIMATION_SPEED: 500,
                        TAKE_TRICK_DELAY: 750,
                    },
                    v = {
                        value: 1,
                        next: function () {
                            return this.value++, this.value;
                        },
                    };
                function u(e) {
                    for (
                        var t = 0, a = ["", "-webkit-", "-ms-"];
                        t < a.length;
                        t++
                    ) {
                        var n = a[t];
                        if (void 0 !== document.body.style[n + e]) return n;
                    }
                    return null;
                }
                (P.DECK_AND_PILE_SIZE = {
                    width: P.CARD_SIZE.width,
                    height: P.CARD_SIZE.height,
                }),
                    (P.MAX_CARD_SIZE = {
                        width: P.CARD_SIZE.width,
                        height: P.CARD_SIZE.height,
                    }),
                    (P.MAX_TRICK_SIZE = {
                        width: P.TRICK_SIZE.width,
                        height: P.TRICK_SIZE.height,
                    }),
                    (P.MAX_SIZE_CARD_PADDING = P.CARD_PADDING),
                    (P.CARD_PADDING_PERCENTAGE =
                        P.MAX_SIZE_CARD_PADDING / P.MAX_CARD_SIZE.width),
                    (jQuery.fn.moveCard = function (e, t, a, n) {
                        return this.moveAndSizeCard(
                            e,
                            t,
                            P.CARD_SIZE.width,
                            P.CARD_SIZE.height,
                            a,
                            n
                        );
                    }),
                    (jQuery.fn.moveAndSizeCard = function (e, t, a, n, i, r) {
                        return this.animate(
                            {
                                top: e,
                                left: t,
                                width: a,
                                height: n,
                                queue: !1,
                            },
                            r || y.ANIMATION_SPEED,
                            i
                        );
                    }),
                    (jQuery.fn.setBackground = function (e, t) {
                        return this.css({
                            "background-position": e + " " + t,
                        });
                    }),
                    (h.prototype.move = function (e, t, a, n) {
                        return $(this.guiCard).moveCard(e, t, a, n), this;
                    }),
                    (h.prototype.z = function () {
                        return parseInt($(this.guiCard).css("z-index"));
                    }),
                    (h.prototype.symbol = function () {
                        var e =
                            {
                                1: "A",
                                11: "J",
                                12: "Q",
                                13: "K",
                                14: "A",
                            }[this.rank] || this.rank;
                        return r[this.suit] + e;
                    });
                var p = u("transform"),
                    m = u("transition"),
                    b = w.parseUserAgent(),
                    C = "Safari" === b.browser && 10 === b.version;
                (h.prototype.rotate = function (e, t) {
                    if (null !== p)
                        return (
                            "number" == typeof t && null !== m
                                ? $(this.guiCard)
                                      .css(
                                          m + "transition-property",
                                          p + "transform"
                                      )
                                      .css(
                                          m + "transition-duration",
                                          o.ms(t) + "ms"
                                      )
                                : null !== m &&
                                  $(this.guiCard)
                                      .css(m + "transition-property", "")
                                      .css(m + "transition-duration", ""),
                            0 === e
                                ? $(this.guiCard).css(p + "transform", "")
                                : C
                                ? $(this.guiCard).css(
                                      p + "transform",
                                      "rotate3d(0,0,1," + e + "deg)"
                                  )
                                : $(this.guiCard).css(
                                      p + "transform",
                                      "rotate(" + e + "deg)"
                                  ),
                            this
                        );
                }),
                    (h.prototype.left = function () {
                        return parseFloat($(this.guiCard).css("left"));
                    }),
                    (h.prototype.top = function () {
                        return parseFloat($(this.guiCard).css("top"));
                    }),
                    (h.prototype.width = function () {
                        return parseFloat($(this.guiCard).css("width"));
                    }),
                    (h.prototype.height = function () {
                        return parseFloat($(this.guiCard).css("height"));
                    }),
                    (h.prototype.normalizeRotationOnMove = !0),
                    (h.prototype.showCard = function (e) {
                        this.normalizeRotationOnMove && this.rotate(0);
                        var t = this.suit.toLowerCase() + this.rank;
                        return (
                            $(this.guiCard)
                                .addClass(t)
                                .addClass("up")
                                .removeClass(
                                    [P.LEFT, P.RIGHT, P.TOP, P.BOTTOM].join(" ")
                                )
                                .addClass(e || P.BOTTOM),
                            this
                        );
                    }),
                    (h.prototype.moveToFront = function () {
                        return (this.guiCard.style.zIndex = v.next()), this;
                    }),
                    (h.prototype.moveToBack = function () {
                        return (this.guiCard.style.zIndex = 0), this;
                    }),
                    (h.prototype.hideCard = function (e) {
                        this.normalizeRotationOnMove && this.rotate(0);
                        var t = this.suit.toLowerCase() + this.rank;
                        return (
                            $(this.guiCard)
                                .removeClass("up")
                                .removeClass(t)
                                .removeClass(
                                    [P.LEFT, P.RIGHT, P.TOP, P.BOTTOM].join(" ")
                                )
                                .addClass(e || P.BOTTOM),
                            this
                        );
                    });
                var k = (function () {
                    function e() {
                        (this.playType = "pile"), (this.resizeEventCount = 0);
                    }
                    var t = e.prototype;
                    return (
                        (t.setBoardHeight = function (e) {
                            var t;
                            if (APP_MODE)
                                P.TABLE_SIZE.height = $("#play-page").height();
                            else {
                                if (w.isMobileLookActive()) {
                                    var a = e || 411;
                                    (t = window.innerHeight - 47) < a
                                        ? (t = a)
                                        : 689 < t && (t = 689);
                                } else {
                                    t = 600;
                                }
                                $("#board, #play-page").height(t),
                                    (P.TABLE_SIZE.height = t);
                            }
                        }),
                        (t.calculateBasicPositions = function (e) {
                            if (
                                ((P.TABLE_SIZE.width = $("#play-page").width()),
                                w.isMobileLookActive())
                            ) {
                                g.debug(
                                    "CalculateBasicPositions: mobile look active"
                                ),
                                    this.setBoardHeight(),
                                    (P.CONDENSE_COUNT = 8),
                                    (P.OVERLAY_MARGIN = 1);
                                var t = 24;
                                375 <= P.TABLE_SIZE.width && (t = 32),
                                    $("#deal").on("click touchstart", function (
                                        e
                                    ) {
                                        e.preventDefault(),
                                            $("#messageBox").fadeIn();
                                    }),
                                    P.TABLE_SIZE.height < 450
                                        ? ((P.CARD_SIZE.width = 52),
                                          (P.CARD_SIZE.height = this.getCardHeight(
                                              P.CARD_SIZE.width
                                          )))
                                        : ((P.CARD_SIZE.width =
                                              P.MAX_CARD_SIZE.width),
                                          (P.CARD_SIZE.height =
                                              P.MAX_CARD_SIZE.height)),
                                    375 <= P.TABLE_SIZE.width && (t = 39),
                                    (P.DECK_AND_PILE_SIZE.width =
                                        P.CARD_SIZE.width),
                                    (P.DECK_AND_PILE_SIZE.height =
                                        P.CARD_SIZE.height);
                                var a = this.getCardHeight(t),
                                    n = $(".avatar").height(),
                                    i = $(".avatar").width();
                                P.LEFT_PLAYER_LEFT = i + 5;
                                var r = Math.floor(
                                    0.35 * P.TABLE_SIZE.height + 22.5
                                );
                                P.SIDE_PLAYER_VERTICAL_LINE = r;
                                var s = Math.floor(
                                    P.SIDE_PLAYER_VERTICAL_LINE -
                                        P.CARD_SIZE.height / 2
                                );
                                if ("pile" === this.playType) {
                                    var o = P.TABLE_SIZE.width / 2,
                                        l = 375 <= P.TABLE_SIZE.width ? 5 : 1;
                                    (P.PILE_POS = {
                                        left: Math.round(o + l) + 1,
                                        top: s,
                                    }),
                                        (P.DECK_POS = {
                                            left:
                                                Math.round(
                                                    o -
                                                        l -
                                                        P.DECK_AND_PILE_SIZE
                                                            .width
                                                ) + 1,
                                            top: s,
                                        }),
                                        $("#pile-marker").css({
                                            width: P.DECK_AND_PILE_SIZE.width,
                                            height: P.DECK_AND_PILE_SIZE.height,
                                            class: "show-restart",
                                            left: P.PILE_POS.left,
                                            top: P.PILE_POS.top,
                                        });
                                } else
                                    (P.DECK_POS = {
                                        left: Math.floor(
                                            (P.TABLE_SIZE.width -
                                                P.CARD_SIZE.width) /
                                                2
                                        ),
                                        top: s,
                                    }),
                                        (P.PILE_POS = {
                                            left: P.DECK_POS.left,
                                            top: P.DECK_POS.top,
                                        });
                                (P.LEFT_PLAYER_TOP = P.RIGHT_PLAYER_TOP = r),
                                    (P.RIGHT_PLAYER_LEFT =
                                        P.TABLE_SIZE.width -
                                        P.LEFT_PLAYER_LEFT -
                                        a),
                                    (P.BOTTOM_PLAYER_LEFT = P.TOP_PLAYER_LEFT = Math.floor(
                                        P.TABLE_SIZE.width / 2
                                    )),
                                    (P.BOTTOM_PLAYER_TOP =
                                        P.TABLE_SIZE.height -
                                        n -
                                        P.CARD_SIZE.height -
                                        5),
                                    (P.TOP_PLAYER_TOP = n + 3),
                                    $("#messageBox").css(
                                        "top",
                                        Math.floor(
                                            P.BOTTOM_PLAYER_TOP -
                                                $("#messageBox").height() -
                                                4
                                        )
                                    );
                                var d = Math.ceil(
                                    (P.CARD_PADDING / P.CARD_SIZE.width) * t
                                );
                                P.LEFT_PLAYER_CARD_SIZE = P.RIGHT_PLAYER_CARD_SIZE = P.TOP_PLAYER_CARD_SIZE = {
                                    width: t,
                                    height: a,
                                    padding: d,
                                    offset: 1,
                                };
                                var c = {
                                    width: 27,
                                    height: 37,
                                };
                                (P.TRICK_SIZE =
                                    c.height < a
                                        ? c
                                        : {
                                              width: t,
                                              height: a,
                                          }),
                                    $(
                                        "#top-player-trick-count, #bottom-player-trick-count"
                                    ).css({
                                        height: P.TRICK_SIZE.height,
                                        lineHeight: P.TRICK_SIZE.height + "px",
                                    }),
                                    $(
                                        "#left-player-trick-count, #right-player-trick-count"
                                    ).css({
                                        width: P.TRICK_SIZE.height,
                                    });
                            } else {
                                g.debug(
                                    "CalculateBasicPositions: desktop look active"
                                ),
                                    (P.CONDENSE_COUNT = 6),
                                    (P.OVERLAY_MARGIN = 2),
                                    this.setBoardHeight(),
                                    (P.CARD_SIZE.width = P.MAX_CARD_SIZE.width),
                                    (P.CARD_SIZE.height =
                                        P.MAX_CARD_SIZE.height),
                                    (P.DECK_AND_PILE_SIZE.width =
                                        P.CARD_SIZE.width),
                                    (P.DECK_AND_PILE_SIZE.height =
                                        P.CARD_SIZE.height);
                                var u = {
                                    width: P.MAX_CARD_SIZE.width,
                                    height: P.MAX_CARD_SIZE.height,
                                    padding: P.CARD_PADDING,
                                };
                                (P.LEFT_PLAYER_CARD_SIZE = P.RIGHT_PLAYER_CARD_SIZE = P.TOP_PLAYER_CARD_SIZE = P.BOTTOM_PLAYER_CARD_SIZE = u),
                                    (P.TRICK_SIZE = P.MAX_TRICK_SIZE),
                                    (P.SIDE_PLAYER_VERTICAL_LINE = 270),
                                    (P.BOTTOM_PLAYER_TOP =
                                        P.TABLE_SIZE.height -
                                        P.CARD_SIZE.height -
                                        P.VERTICAL_MARGIN),
                                    (P.TOP_PLAYER_TOP = P.VERTICAL_MARGIN),
                                    (P.LEFT_PLAYER_TOP =
                                        P.TABLE_SIZE.height / 2),
                                    (P.RIGHT_PLAYER_TOP =
                                        P.TABLE_SIZE.height / 2),
                                    (P.BOTTOM_PLAYER_LEFT =
                                        P.TABLE_SIZE.width / 2),
                                    (P.TOP_PLAYER_LEFT =
                                        P.TABLE_SIZE.width / 2),
                                    (P.LEFT_PLAYER_LEFT = P.HORIZONTAL_MARGIN),
                                    (P.RIGHT_PLAYER_LEFT =
                                        P.TABLE_SIZE.width -
                                        P.CARD_SIZE.height -
                                        P.HORIZONTAL_MARGIN),
                                    (P.DECK_POS = {
                                        left:
                                            P.TABLE_SIZE.width / 2 -
                                            1.3 * P.CARD_SIZE.width,
                                        top:
                                            P.TABLE_SIZE.height / 2 -
                                            P.CARD_SIZE.height / 2,
                                    }),
                                    (P.PILE_POS = {
                                        left:
                                            P.DECK_POS.left +
                                            1.3 * P.CARD_SIZE.width,
                                        top: P.DECK_POS.top,
                                    });
                            }
                            var h = Math.round(
                                    (P.TABLE_SIZE.width - P.CARD_SIZE.width) / 2
                                ),
                                p =
                                    Math.floor(
                                        P.SIDE_PLAYER_VERTICAL_LINE -
                                            P.CARD_SIZE.height / 2
                                    ) + 10,
                                m = 40,
                                f = 35;
                            P.CARD_SIZE.width < P.MAX_CARD_SIZE.width &&
                                ((m = 30), (f = 26)),
                                (P.TRICK_POS = {
                                    top: {
                                        top: p - f,
                                        left: h,
                                    },
                                    bottom: {
                                        top: p + f,
                                        left: h,
                                    },
                                    left: {
                                        top: p,
                                        left: h - m,
                                    },
                                    right: {
                                        top: p,
                                        left: h + m,
                                    },
                                }),
                                this.calculateBasicPositionsCustom &&
                                    this.calculateBasicPositionsCustom(e);
                        }),
                        (t.setCardSize = function (e) {
                            (P.CARD_SIZE.width = e),
                                (P.CARD_SIZE.height = this.getCardHeight(e));
                        }),
                        (t.getCardHeight = function (e) {
                            var t =
                                P.MAX_CARD_SIZE.height / P.MAX_CARD_SIZE.width;
                            return Math.ceil(t * e);
                        }),
                        (t.showCards = function (i, r, e) {
                            d(function () {
                                var e = i,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    n.showCard(r);
                                }
                            }, e || y.ANIMATION_SPEED / 2);
                        }),
                        (t.hideCards = function (i, r, e) {
                            d(function () {
                                var e = i,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    n.hideCard(r);
                                }
                            }, e || y.ANIMATION_SPEED / 2);
                        }),
                        (t.resize = function (e, t) {
                            var a = this;
                            if (t) {
                                (this.resizeEventCount = 0),
                                    this.calculateBasicPositions(e.game);
                                var n = e.game,
                                    i = n.players;
                                if (
                                    (0 < i.length &&
                                        (p(
                                            i[0],
                                            P.BOTTOM_PLAYER_CARD_SIZE,
                                            P.BOTTOM_PLAYER_TOP,
                                            P.BOTTOM_PLAYER_LEFT
                                        ),
                                        this.resizeTricks(i[0]),
                                        this.adjustHand(i[0], null, 50)),
                                    2 === i.length
                                        ? (p(
                                              i[1],
                                              P.TOP_PLAYER_CARD_SIZE,
                                              P.TOP_PLAYER_TOP,
                                              P.TOP_PLAYER_LEFT
                                          ),
                                          this.resizeTricks(i[1]),
                                          this.adjustHand(i[1], null, 50))
                                        : 3 <= i.length &&
                                          (p(
                                              i[1],
                                              P.LEFT_PLAYER_CARD_SIZE,
                                              P.LEFT_PLAYER_TOP,
                                              P.LEFT_PLAYER_LEFT
                                          ),
                                          p(
                                              i[2],
                                              P.TOP_PLAYER_CARD_SIZE,
                                              P.TOP_PLAYER_TOP,
                                              P.TOP_PLAYER_LEFT
                                          ),
                                          this.resizeTricks(i[1]),
                                          this.resizeTricks(i[2]),
                                          this.adjustHand(i[1], null, 50),
                                          this.adjustHand(i[2], null, 50)),
                                    4 === i.length &&
                                        (p(
                                            i[3],
                                            P.RIGHT_PLAYER_CARD_SIZE,
                                            P.RIGHT_PLAYER_TOP,
                                            P.RIGHT_PLAYER_LEFT
                                        ),
                                        this.resizeTricks(i[3]),
                                        this.adjustHand(i[3], null, 50)),
                                    0 === n.players.length &&
                                        (p(
                                            e.bottomPlayer,
                                            P.BOTTOM_PLAYER_CARD_SIZE,
                                            P.BOTTOM_PLAYER_TOP,
                                            P.BOTTOM_PLAYER_LEFT
                                        ),
                                        p(
                                            e.leftPlayer,
                                            P.LEFT_PLAYER_CARD_SIZE,
                                            P.LEFT_PLAYER_TOP,
                                            P.LEFT_PLAYER_LEFT
                                        ),
                                        p(
                                            e.topPlayer,
                                            P.TOP_PLAYER_CARD_SIZE,
                                            P.TOP_PLAYER_TOP,
                                            P.TOP_PLAYER_LEFT
                                        ),
                                        p(
                                            e.rightPlayer,
                                            P.RIGHT_PLAYER_CARD_SIZE,
                                            P.RIGHT_PLAYER_TOP,
                                            P.RIGHT_PLAYER_LEFT
                                        )),
                                    this.resizeCustom && this.resizeCustom(e),
                                    this.resizeDeckAndPile(n),
                                    "trick" === this.playType &&
                                        n.pile &&
                                        0 < n.pile.length)
                                ) {
                                    var r = n.pile,
                                        s = Array.isArray(r),
                                        o = 0;
                                    for (r = s ? r : r[Symbol.iterator](); ; ) {
                                        var l;
                                        if (s) {
                                            if (o >= r.length) break;
                                            l = r[o++];
                                        } else {
                                            if ((o = r.next()).done) break;
                                            l = o.value;
                                        }
                                        var d = l,
                                            c = d.playedBy.position,
                                            u = P.TRICK_POS[c];
                                        $(d.guiCard).css(u);
                                    }
                                }
                                w.isMobileLookActive() ||
                                    $("#messageBox").css("top", 365);
                            } else {
                                this.resizeEventCount++;
                                var h = this.resizeEventCount;
                                setTimeout(function () {
                                    h === a.resizeEventCount && a.resize(e, !0);
                                }, 200);
                            }
                            function p(e, t, a, n) {
                                (e.cardSize = t), (e.top = a), (e.left = n);
                            }
                        }),
                        (t.resizeDeckAndPile = function (e) {
                            function t(e, t, a, n) {
                                for (var i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    (i + 1) % P.CONDENSE_COUNT == 0 &&
                                        ((a -= P.OVERLAY_MARGIN),
                                        (t -= P.OVERLAY_MARGIN)),
                                        $(r.guiCard).css({
                                            top: t,
                                            left: a,
                                            width: n.width,
                                            height: n.height,
                                        });
                                }
                            }
                            e.deck &&
                                0 < e.deck.length &&
                                t(
                                    e.deck,
                                    P.DECK_POS.top,
                                    P.DECK_POS.left,
                                    P.DECK_AND_PILE_SIZE
                                ),
                                e.pile &&
                                    0 < e.pile.length &&
                                    "pile" === this.playType &&
                                    t(
                                        e.pile,
                                        P.PILE_POS.top,
                                        P.PILE_POS.left,
                                        P.DECK_AND_PILE_SIZE
                                    );
                        }),
                        (t.resizeTricks = function (e) {
                            if (e.tricks)
                                for (var t = 0; t < e.tricks.length; t++) {
                                    var a = e.tricks[t].element,
                                        n = this.getTrickProps(e, t);
                                    $(a).css(n);
                                    var i = this.getTrickCountProps(e, n);
                                    $("#" + e.id + "-trick-count").css(i);
                                }
                        }),
                        (t.deckReady = function (e) {
                            this._createCardPile(
                                e.game.deck,
                                P.DECK_POS.top,
                                P.DECK_POS.left,
                                !1
                            ),
                                e.callback(),
                                "1" === w.cake("autodeal") &&
                                    (w.deleteCake("autodeal"),
                                    $("#deal").click());
                        }),
                        (t.clearTable = function (e) {
                            $(".card, .trick").remove(),
                                $(".trick-count").text(""),
                                this.hideResults(),
                                $(".hide-restart").hide(),
                                $(".show-restart").show(),
                                $(".remove-restart").remove(),
                                s(),
                                s(),
                                $("#current-score span").text("0"),
                                $("#deal").show(),
                                $("#messageBox").hide(),
                                (v.value = 1),
                                w.removeConfetti(),
                                delete this.wrongCardMessages,
                                w.cake("results")
                                    ? e.game.message(
                                          "Click Deal to start the next round."
                                      )
                                    : e.game.message(
                                          "Click Deal to start a new game."
                                      ),
                                l.resetGameStatus(),
                                this.clearTableCustom &&
                                    this.clearTableCustom(e),
                                e.callback();
                        }),
                        (t.illegalCard = function (e) {
                            this.wrongCardMessages ||
                                ((this.wrongCardMessages = [
                                    "That's not even your card!",
                                    "No, really, you can't play the opponents cards!",
                                    "Are you sure you understand the rules of this game?",
                                    "THESE ARE NOT THE CARDS YOU'RE LOOKING FOR!",
                                    "OK, now you're just messing with me!",
                                    "STOP TOUCHING MY CARDS!",
                                    "STOP IT!",
                                    "Play your own cards, not mine!",
                                    "Ok, have you had your fun now? Can we keep on playing the game?",
                                    "Just play!",
                                    "If you touch my cards one more time there will be CONSEQUENCES!!!",
                                    "At some point this is just gonna stop being funny...",
                                    "I'm giving you the silent treatment from now on!",
                                ]),
                                (this.wrongCardMessages.index = 0));
                            var t = this.wrongCardMessages[
                                this.wrongCardMessages.index++
                            ];
                            t && e.game.message(t);
                        }),
                        (t._createCardPile = function (e, t, a, n) {
                            $(".card").remove();
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                (i + 1) % P.CONDENSE_COUNT == 0 &&
                                    ((a -= P.OVERLAY_MARGIN),
                                    (t -= P.OVERLAY_MARGIN)),
                                    this._createGuiCard(r, {
                                        left: a,
                                        top: t,
                                    }),
                                    n ? r.showCard() : r.hideCard();
                            }
                            var s = Math.ceil(window.devicePixelRatio || 1);
                            (s = Math.min(3, s)),
                                1.5 == window.devicePixelRatio && (s = 3),
                                w.qs.cards && (s = w.qs.cards);
                            var o =
                                "/shared/images/cards/normalcards-" +
                                s +
                                "x.css";
                            $("#csscards").attr("href") !== o &&
                                ($("#csscards").remove(),
                                $("<link>", {
                                    rel: "stylesheet",
                                    id: "csscards",
                                    href:
                                        "/shared/images/cards/normalcards-" +
                                        s +
                                        "x.css",
                                }).appendTo("head"));
                        }),
                        (t._createGuiCard = function (e, t) {
                            var a = $("#play-page"),
                                n = $("<div>").addClass("card").css(t);
                            P.MAX_CARD_SIZE.width !=
                                P.DECK_AND_PILE_SIZE.width &&
                                n.css({
                                    width: P.DECK_AND_PILE_SIZE.width,
                                    height: P.DECK_AND_PILE_SIZE.height,
                                });
                            var i = $("<div>").addClass("facedown"),
                                r = $("<div>").addClass("faceup");
                            $(n).append(i), $(n).append(r);
                            var s = n[0];
                            a.append(s),
                                ((e.guiCard = s).card = e).moveToFront(),
                                e.hideCard();
                        }),
                        (t.getCardPos = function (e, t, a) {
                            a = a || e.hand.length;
                            var n = P.CARD_SIZE.height,
                                i = P.CARD_SIZE.width,
                                r = P.CARD_PADDING,
                                s = 15;
                            e.cardSize &&
                                ((n = e.cardSize.height),
                                (i = e.cardSize.width),
                                (r = e.cardSize.padding),
                                (s = e.cardSize.padding));
                            var o = (a - 1) * r + i,
                                l = {},
                                d = 0;
                            e.hand[t] && e.hand[t].selected && (d = s);
                            var c = P.TABLE_SIZE.width - 6,
                                u = w.isMobileLookActive() ? c : 360,
                                h = 0;
                            if (
                                e.position === P.BOTTOM &&
                                (w.siteSettings.spreadCards ||
                                    w.isMobileLookActive())
                            ) {
                                var p = a - 1;
                                (o = u),
                                    (r = Math.floor(
                                        (o - P.CARD_SIZE.width) / p
                                    )),
                                    (h = o - (P.CARD_SIZE.width + p * r)),
                                    r > P.CARD_SIZE.width / 2 &&
                                        ((r = Math.ceil(P.CARD_SIZE.width / 2)),
                                        (o = P.CARD_SIZE.width + p * r),
                                        (h = 0));
                            } else if (e.position !== P.BOTTOM) {
                                var m = i + 12 * r;
                                if (m < o)
                                    h =
                                        (o = m) -
                                        (i +
                                            (a - 1) *
                                                (r = Math.floor(
                                                    (m - i) / (a - 1)
                                                )));
                            }
                            var f = (n - i) / 2;
                            if (e.position === P.TOP) {
                                var g = e.left + o / 2 - i;
                                t <= h ? r++ : (g -= h),
                                    (l.left = g - t * r),
                                    (l.top = e.top + d);
                            } else if (e.position === P.BOTTOM) {
                                var y = e.left - o / 2;
                                (o - i) / (a - 1) <
                                Math.round(
                                    (P.MAX_SIZE_CARD_PADDING /
                                        P.MAX_CARD_SIZE.width) *
                                        i
                                )
                                    ? this.adjustCrushedCards(
                                          e,
                                          l,
                                          i,
                                          o,
                                          y,
                                          a,
                                          t
                                      )
                                    : (t <= h ? r++ : (y += h),
                                      (l.left = y + t * r)),
                                    (l.top = e.top - d);
                            } else if (e.position === P.LEFT) {
                                var v = e.top - o / 2 - f;
                                t <= h ? r++ : (v += h),
                                    (l.top = v + t * r),
                                    (l.left = e.left + d + f);
                            } else if (e.position === P.RIGHT) {
                                var b = e.top + o / 2 - i - f;
                                t <= h ? r++ : (b -= h),
                                    (l.top = b - t * r),
                                    (l.left = e.left - d + f);
                            }
                            return l;
                        }),
                        (t.adjustCrushedCards = function (e, t, a, n, i, r, s) {
                            var o = r - 1;
                            void 0 !== e.zoomedPos &&
                                0 <= e.zoomedPos &&
                                e.zoomedPos < r &&
                                (o = e.zoomedPos);
                            for (
                                var l = Math.round(
                                        (P.MAX_SIZE_CARD_PADDING /
                                            P.MAX_CARD_SIZE.width) *
                                            a
                                    ),
                                    d = Math.round(
                                        (P.MAX_SIZE_CARD_PADDING /
                                            P.MAX_CARD_SIZE.width) *
                                            a *
                                            1.5
                                    ),
                                    c = Math.ceil(l / 2),
                                    u = 7,
                                    h = 320;
                                h + d < P.TABLE_SIZE.width;

                            )
                                u++, (h += d);
                            function p(e) {
                                return e <= 2 ? e * c : 2 * (e - 2) + 2 * c;
                            }
                            var m = Math.floor(o - u / 2);
                            m < 2 && (m = 0), r - 2 <= m + u && (m = r - u - 1);
                            var f,
                                g = m + u,
                                y = m,
                                v = p(y),
                                b = r - g,
                                w = n - v - (p(b - 1) + a),
                                C =
                                    w -
                                    (0 == b
                                        ? (u - 1) *
                                              (f = Math.floor(
                                                  (w - a) / (u - 1)
                                              )) +
                                          a
                                        : u * (f = Math.floor(w / u)));
                            if (s < m) {
                                t.left = i + 2 * s;
                                var k = y - 2,
                                    T = 2 * k;
                                if (y - 2 < s) {
                                    var S = s - k;
                                    t.left = i + T + S * c;
                                }
                                t.crushed = !0;
                            } else if (m <= s && s < g) {
                                var A = s - y,
                                    E = i + v;
                                (t.left =
                                    A < C ? E + A * (f + 1) : E + A * f + C),
                                    (t.crushed = !1);
                            } else {
                                var $ = s - y - u,
                                    I = i + v + w;
                                (t.left =
                                    $ < 2
                                        ? I + $ * c
                                        : I + 2 * c + 2 * ($ - 2)),
                                    (t.crushed = !0),
                                    (t.crushed = 0 != $);
                            }
                        }),
                        (t.dealCard = function (e) {
                            this.adjustHand(
                                e.player,
                                e.callback,
                                y.ANIMATION_SPEED / 2,
                                !1,
                                e.game.cardCount
                            );
                        }),
                        (t.selectCard = function (e) {
                            this.adjustHand(
                                e.player,
                                e.callback,
                                y.ANIMATION_SPEED / 3
                            );
                        }),
                        (t.unselectCard = function (e) {
                            this.adjustHand(
                                e.player,
                                e.callback,
                                y.ANIMATION_SPEED / 3
                            );
                        }),
                        (t.pickDealer = function (e) {
                            $(".avatar").removeClass("dealer"),
                                e.game.showDealerHat &&
                                    $("#" + e.dealerId).addClass("dealer"),
                                e.callback();
                        }),
                        (t.pass = function (e) {
                            var t = $("#pass");
                            t.css({
                                "font-size": "16px",
                                top: e.player.top,
                                "z-index": v.value + 1e3,
                            }),
                                e.player.position === P.BOTTOM &&
                                    t.css("top", e.player.top + 100);
                            var a = {
                                top: P.PILE_POS.top - 40,
                                "font-size": "120px",
                            };
                            e.player.position === P.LEFT ||
                            e.player.position === P.RIGHT
                                ? (e.player.position === P.LEFT
                                      ? t.css({
                                            right: "",
                                            left: 0,
                                        })
                                      : t.css({
                                            left: "",
                                            right: 0,
                                        }),
                                  t.css("width", "100px"),
                                  (a.width = P.TABLE_SIZE.width))
                                : (t.css("width", P.TABLE_SIZE.width + "px"),
                                  t.css("text-align", "center")),
                                t
                                    .show()
                                    .animate(a, 2 * y.ANIMATION_SPEED)
                                    .fadeOut(y.ANIMATION_SPEED, e.callback);
                        }),
                        (t.play = function (e) {
                            "pile" === this.playType
                                ? this.playOnPile(e)
                                : "trick" === this.playType &&
                                  this.playOnTrick(e);
                        }),
                        (t.moveCardsToFront = function (e) {
                            var t = e.slice(0, e.length);
                            t.sort(function (e, t) {
                                return e.z() - t.z();
                            });
                            for (var a = t.length - 1; 0 <= a; a--)
                                $(t[a].guiCard).css("z-index", v.value + a + 1);
                            v.value += t.length + 3;
                        }),
                        (t.playOnPile = function (u) {
                            function h(e) {
                                if (0 === u.cards.length) u.callback();
                                else {
                                    var t = u.player.hand.slice(0),
                                        a = u.cards,
                                        n = Array.isArray(a),
                                        i = 0;
                                    for (a = n ? a : a[Symbol.iterator](); ; ) {
                                        var r;
                                        if (n) {
                                            if (i >= a.length) break;
                                            r = a[i++];
                                        } else {
                                            if ((i = a.next()).done) break;
                                            r = i.value;
                                        }
                                        var s = r;
                                        t.push(s);
                                    }
                                    t.sort(function (e, t) {
                                        return (
                                            $(e.guiCard).css("z-index") -
                                            $(t.guiCard).css("z-index")
                                        );
                                    });
                                    for (var o = t.length - 1; 0 <= o; o--)
                                        $(t[o].guiCard).css(
                                            "z-index",
                                            v.value + o + 1
                                        );
                                    v.value += t.length + 3;
                                    var l = u.cards[0];
                                    f.remove(u.cards, u.cards[0]);
                                    var d =
                                            P.PILE_POS.top -
                                            Math.floor(
                                                (m + e) / P.CONDENSE_COUNT
                                            ) *
                                                P.OVERLAY_MARGIN,
                                        c =
                                            P.PILE_POS.left -
                                            Math.floor(
                                                (m + e) / P.CONDENSE_COUNT
                                            ) *
                                                P.OVERLAY_MARGIN;
                                    $(l.guiCard).moveAndSizeCard(
                                        d,
                                        c,
                                        P.DECK_AND_PILE_SIZE.width,
                                        P.DECK_AND_PILE_SIZE.height,
                                        function () {
                                            return h(e + 1);
                                        }
                                    ),
                                        0 === u.cards.length &&
                                            p.adjustHand(
                                                u.player,
                                                null,
                                                y.ANIMATION_SPEED,
                                                !0
                                            ),
                                        p.showCards([l]);
                                }
                            }
                            var p = this,
                                m = u.game.pile.length - u.cards.length;
                            1 < u.cards.length &&
                            $(u.cards[u.cards.length - 1].guiCard).css("top") !=
                                $(u.cards[0].guiCard).css("top")
                                ? $(
                                      u.cards[u.cards.length - 1].guiCard
                                  ).animate(
                                      {
                                          top: $(u.cards[0].guiCard).css("top"),
                                      },
                                      y.ANIMATION_SPEED / 4,
                                      function () {
                                          return h(0);
                                      }
                                  )
                                : h(0);
                        }),
                        (t.playOnTrick = function (e) {
                            var t = e.player.hand.slice(
                                0,
                                e.player.hand.length
                            );
                            t.push(e.cards[0]), this.moveCardsToFront(t);
                            var a = e.player.position,
                                n = P.TRICK_POS[a],
                                i = e.cards[0];
                            i.random &&
                                e.game.message(
                                    e.player.name +
                                        " waited too long to make their move, a random card was played for them!"
                                ),
                                $(i.guiCard).moveCard(
                                    n.top,
                                    n.left,
                                    e.callback
                                ),
                                this.showCards([i]),
                                d(function () {
                                    return i.moveToFront();
                                }, y.ANIMATION_SPEED / 1.5),
                                this.adjustHand(
                                    e.player,
                                    null,
                                    y.ANIMATION_SPEED,
                                    !0
                                );
                        }),
                        (t.adjustHand = function (e, t, a, n, i) {
                            a = a || y.ANIMATION_SPEED;
                            for (var r = 0; r < e.hand.length; r++) {
                                var s = e.hand[r],
                                    o = this.getCardPos(e, r, i),
                                    l = void 0;
                                r === e.hand.length - 1 && (l = t),
                                    e.cardSize
                                        ? $(s.guiCard).moveAndSizeCard(
                                              o.top,
                                              o.left,
                                              e.cardSize.width,
                                              e.cardSize.height,
                                              l,
                                              a
                                          )
                                        : $(s.guiCard).moveCard(
                                              o.top,
                                              o.left,
                                              l,
                                              a
                                          ),
                                    (s.crushed = !!o.crushed),
                                    n || s.moveToFront();
                            }
                            0 === e.hand.length && t && d(t, a),
                                e.showCards
                                    ? this.showCards(e.hand, e.position, a / 2)
                                    : this.hideCards(e.hand, e.position, a / 2);
                        }),
                        (t.draw = function (e) {
                            this.adjustHand(e.player, e.callback);
                        }),
                        (t.sortHand = function (e) {
                            this.adjustHand(e.player, e.callback);
                        }),
                        (t.showResults = function () {
                            $("#board").addClass("show-results");
                            var e = $("#result-box").height(),
                                t = ($("#play-page").height() - e) / 2;
                            (t -= 22),
                                w.isMobileLookActive() && 25 < t && (t -= 25),
                                $("#result-box").css(
                                    "z-index",
                                    Math.max(5e5, v.next())
                                ),
                                $("#result-box").css(
                                    "top",
                                    Math.max(Math.floor(t), 0)
                                );
                        }),
                        (t.hideResults = function () {
                            $("#board").removeClass("show-results");
                        }),
                        (t.getTrickProps = function (e, t) {
                            var a = {},
                                n = w.isMobileLookActive() ? 6 : 10,
                                i = $("#bottom-player").width(),
                                r = 2 + (i - P.TRICK_SIZE.height) / 2,
                                s = P.TABLE_SIZE.width / 2,
                                o = i / 2,
                                l = t * n;
                            -1 === t && (l = -P.TRICK_SIZE.width);
                            var d =
                                    $("#left-player").offset().top -
                                    $("#play-page").offset().top,
                                c = 5;
                            if (
                                (e.position === P.TOP || e.position === P.BOTTOM
                                    ? ((a.width = P.TRICK_SIZE.width),
                                      (a.height = P.TRICK_SIZE.height))
                                    : ((a.width = P.TRICK_SIZE.height),
                                      (a.height = P.TRICK_SIZE.width)),
                                e.position === P.TOP)
                            )
                                w.isMobileLookActive() && (c -= 3),
                                    (a.top = r),
                                    (a.left = s + o + c + l);
                            else if (e.position === P.BOTTOM) {
                                var u =
                                    P.TABLE_SIZE.height -
                                    parseInt(
                                        $("#bottom-player").css("bottom")
                                    ) -
                                    $("#bottom-player").height();
                                (a.top = u + (i - P.TRICK_SIZE.height) / 2),
                                    w.isMobileLookActive() && (c += 3),
                                    (a.left =
                                        s - o - P.TRICK_SIZE.width - c - l);
                            } else if (e.position === P.LEFT)
                                (a.top = d - P.TRICK_SIZE.width - c - l),
                                    (a.left = 1 + r);
                            else if (e.position === P.RIGHT) {
                                var h = w.isMobileLookActive() ? 0 : 2;
                                (a.left =
                                    P.TABLE_SIZE.width -
                                    r -
                                    P.TRICK_SIZE.height -
                                    h),
                                    w.isMobileLookActive()
                                        ? (a.top =
                                              d - P.TRICK_SIZE.width - c - l)
                                        : (a.top =
                                              d +
                                              $("#right-player").height() +
                                              c +
                                              l);
                            }
                            for (var p in a) a[p] = Math.round(a[p]);
                            return a;
                        }),
                        (t.getTrickCountProps = function (e, t) {
                            var a = {};
                            return (
                                e.position === P.TOP
                                    ? ((a.top = t.top),
                                      (a.left = t.left + P.TRICK_SIZE.width))
                                    : e.position === P.BOTTOM
                                    ? ((a.top = t.top),
                                      (a.left =
                                          t.left -
                                          $(
                                              "#bottom-player-trick-count"
                                          ).width()))
                                    : e.position === P.LEFT
                                    ? ((a.top =
                                          t.top -
                                          $(
                                              "#left-player-trick-count"
                                          ).height()),
                                      (a.left = t.left))
                                    : e.position === P.RIGHT &&
                                      ((a.left = t.left),
                                      w.isMobileLookActive()
                                          ? (a.top =
                                                t.top -
                                                $(
                                                    "#right-player-trick-count"
                                                ).height())
                                          : (a.top =
                                                t.top + P.TRICK_SIZE.width)),
                                a
                            );
                        }),
                        (t.takeTrick = function (h) {
                            var p = this;
                            d(function () {
                                var e = h.trick,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    var i = n;
                                    $(i.guiCard).addClass("trick-card"),
                                        i.moveToFront();
                                }
                                var r = p.getTrickProps(
                                        h.player,
                                        h.player.tricks.length - 1
                                    ),
                                    s = {
                                        top: r.top,
                                        left: r.left,
                                        width: P.TRICK_SIZE.width,
                                        height: P.TRICK_SIZE.height,
                                    },
                                    o = p.getTrickCountProps(h.player, r),
                                    l =
                                        h.player.position === P.TOP ||
                                        h.player.position === P.BOTTOM
                                            ? "vertical"
                                            : "horizontal";
                                function d() {
                                    $(".trick-card").hide();
                                    var e = $("<div/>");
                                    (h.player.tricks[
                                        h.player.tricks.length - 1
                                    ].element = e.get(0)),
                                        $("#play-page").append(
                                            e
                                                .addClass("trick")
                                                .addClass(h.player.position)
                                                .addClass(l)
                                                .css(r)
                                        ),
                                        h.callback();
                                }
                                for (var c = 0; c < h.trick.length; c++)
                                    $(h.trick[c].guiCard).animate(
                                        s,
                                        y.ANIMATION_SPEED,
                                        c === h.trick.length - 1 ? d : null
                                    );
                                var u = $("#" + h.player.id + "-trick-count");
                                u.animate(o, y.ANIMATION_SPEED, function () {
                                    if (void 0 !== h.player.bidValue) {
                                        var e = h.player.tricks.length,
                                            t = h.player.bidValue;
                                        u.text(e + "/" + t);
                                    } else u.text(h.player.tricks.length.toString());
                                });
                            }, y.TAKE_TRICK_DELAY);
                        }),
                        (t.createMiniCardsElement = function (e, t) {
                            var a = $("<span>");
                            t && a.addClass("mini-card-outlined");
                            var n = e,
                                i = Array.isArray(n),
                                r = 0;
                            for (n = i ? n : n[Symbol.iterator](); ; ) {
                                var s;
                                if (i) {
                                    if (r >= n.length) break;
                                    s = n[r++];
                                } else {
                                    if ((r = n.next()).done) break;
                                    s = r.value;
                                }
                                var o = s,
                                    l = $("<span>", {
                                        class: "mini-card " + o.suit,
                                    }).html(o.symbol());
                                a.append(l);
                            }
                            return a;
                        }),
                        (t.processPageCards = function () {
                            var e = $(".process-cards"),
                                c = {
                                    J: 11,
                                    Q: 12,
                                    K: 13,
                                    A: 1,
                                },
                                u = this;
                            e.each(function () {
                                var e = [],
                                    t = $(this).text().split(" "),
                                    a = Array.isArray(t),
                                    n = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var i;
                                    if (a) {
                                        if (n >= t.length) break;
                                        i = t[n++];
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value;
                                    }
                                    var r = i,
                                        s = r.charAt(0).toLowerCase(),
                                        o = r.substr(1),
                                        l = c[o];
                                    (l = l || parseInt(o)), e.push(new h(s, l));
                                }
                                var d = u.createMiniCardsElement(e, !0);
                                $(this).replaceWith(d);
                            });
                        }),
                        e
                    );
                })();
                t.exports = {
                    Renderer: k,
                    dimensions: c,
                    timing: y,
                    zIndex: v,
                };
            },
            {
                "../game": 6,
                "../gamecontrol": 7,
                "../helper-functions": 8,
                "../util": 19,
                "./card": 2,
            },
        ],
        5: [
            function (e, t, a) {
                "use strict";
                var n = e("./render"),
                    h = n.dimensions,
                    r = n.timing,
                    s = n.zIndex,
                    p = e("../statistics"),
                    i = e("../helper-functions"),
                    o = i._setTimeout,
                    m = i.captainsLog,
                    u = e("../game").makePlayersSad,
                    f = e("../gamecontrol"),
                    g = e("../util"),
                    y = e("../page").players,
                    l = e("../temp-storage"),
                    v = e("../page").slug,
                    b = e("../multiplayer/multiplayer-game-client"),
                    d = e("../multiplayer/multiplayer-lobby-client"),
                    c = e("../multiplayer/multiplayer-challenge-client"),
                    w = 0,
                    C = 1,
                    k = 2,
                    T = 3,
                    S = (function () {
                        function e(e) {
                            (this.game = e),
                                (this.playerCount = e.defaultPlayerCount),
                                (this.tempStorage = new l(v));
                        }
                        var t = e.prototype;
                        return (
                            (t.init = function (e, t, a, n) {
                                var i = this;
                                void 0 === n && (n = null);
                                try {
                                    if (g.qs.gid) {
                                        var r = this.tempStorage.get(g.qs.gid);
                                        r &&
                                            ((this.multiplayerTable = r),
                                            this.tempStorage.remove(g.qs.gid),
                                            $("#messageBox").show(),
                                            this.tempStorage.remove(
                                                "joinedtable"
                                            ));
                                    }
                                    (this.multiplayerEventTransforms = {}),
                                        (this.renderer = a),
                                        (this.renderer.tempStorage = this.tempStorage),
                                        this.renderer.processPageCards(),
                                        this.renderer.calculateBasicPositions(
                                            this.game
                                        ),
                                        this.createHumanPlayer(e),
                                        this.createOpponentPlayers(t, n),
                                        this.setEventRenderers(),
                                        (this.isTouch = !1);
                                    try {
                                        this.isTouch = !!navigator.userAgent.match(
                                            /iphone|ipad|android/gi
                                        );
                                    } catch (e) {}
                                    this.setupSortHandler(),
                                        this.setupMessageHandler(),
                                        "Click Deal to start the game." ===
                                            $("#messageBox p").text() &&
                                            $("html").hasClass("starwars") &&
                                            $("#messageBox p").text(
                                                "To start the game, click Deal you must!"
                                            ),
                                        this.setupPlayerCountHandler(),
                                        this.setupRestartHandler(),
                                        this.setupWinHandler(),
                                        this.setupStartHandler(),
                                        this.setupTurnHandler(),
                                        this.multiplayerTable &&
                                            1 === this.multiplayerTable.round &&
                                            g.deleteCake("results"),
                                        this.setupMultiplayerLobby(),
                                        this.extraSetup(),
                                        this.multiplayerTable
                                            ? this.setupMultiplayerGame()
                                            : this.setupDealHandler(),
                                        this.startGame(),
                                        f.addRestartHandler(function () {
                                            return i.restartWithoutReload();
                                        }),
                                        $(window).on("resize", function (e) {
                                            (e.game = i.game),
                                                (e.topPlayer = i.topPlayer),
                                                (e.bottomPlayer =
                                                    i.bottomPlayer),
                                                (e.human = i.bottomPlayer),
                                                (e.rightPlayer = i.rightPlayer),
                                                (e.leftPlayer = i.leftPlayer),
                                                i.renderer.resize(e);
                                        }),
                                        g.siteSettings.addListener(
                                            "spreadCards",
                                            function () {
                                                (f.isGameStarted() ||
                                                    f.isGameFinished()) &&
                                                    i.renderer.adjustHand(
                                                        i.human
                                                    );
                                            }
                                        );
                                } catch (e) {
                                    m.error(e), alert(e + e.stack);
                                }
                            }),
                            (t.createHumanPlayer = function (e) {
                                (this.human = new e(y.bottom.name)),
                                    (this.human.top = h.BOTTOM_PLAYER_TOP),
                                    (this.human.left = h.BOTTOM_PLAYER_LEFT),
                                    (this.human.position = h.BOTTOM),
                                    (this.human.showCards = !0),
                                    (this.human.id = "bottom-player"),
                                    (this.human.stats = {}),
                                    (this.bottomPlayer = this.human),
                                    this.multiplayerTable &&
                                        (this.human.multiplayerId = this.multiplayerTable.players[0].id);
                            }),
                            (t.restartWithoutReload = function () {
                                g.deleteCake("results"),
                                    this.results && (this.results = []),
                                    $(".bubble").hide(),
                                    this.game.startAgain();
                            }),
                            (t.saveLastDealer = function () {
                                this.multiplayerTable ||
                                    (g.cake(
                                        "lastDealerIndex",
                                        this.game.dealerIndex
                                    ),
                                    (this._localLastDealerIndex = this.game.dealerIndex),
                                    (this.game.lastDealerIndex = this.game.dealerIndex));
                            }),
                            (t.loadLastDealer = function () {
                                if (!this.multiplayerTable) {
                                    var e = g.cake("lastDealerIndex");
                                    (e + "").match(/^[0-3]$/) &&
                                        (this.game.lastDealerIndex = parseInt(
                                            e
                                        ));
                                }
                            }),
                            (t.createOpponentPlayers = function (e, t) {
                                if (this.multiplayerTable) {
                                    (this.topPlayer = this.createPlayer(t, k)),
                                        (this.leftPlayer = this.createPlayer(
                                            t,
                                            C
                                        )),
                                        (this.rightPlayer = this.createPlayer(
                                            t,
                                            T
                                        )),
                                        (this.topPlayer.face = y.top.code);
                                    var a = this.multiplayerTable.players;
                                    2 === a.length
                                        ? (this.topPlayer.multiplayerId =
                                              a[1].id)
                                        : 3 === a.length
                                        ? ((this.leftPlayer.multiplayerId =
                                              a[1].id),
                                          (this.topPlayer.multiplayerId =
                                              a[2].id))
                                        : 4 === a.length &&
                                          ((this.leftPlayer.multiplayerId =
                                              a[1].id),
                                          (this.topPlayer.multiplayerId =
                                              a[2].id),
                                          (this.rightPlayer.multiplayerId =
                                              a[3].id));
                                } else
                                    (this.topPlayer = this.createPlayer(e, k)),
                                        (this.leftPlayer = this.createPlayer(
                                            e,
                                            C
                                        )),
                                        (this.rightPlayer = this.createPlayer(
                                            e,
                                            T
                                        ));
                            }),
                            (t.createPlayer = function (e, t, a) {
                                void 0 === t && (t = k),
                                    void 0 === a && (a = !1);
                                var n = {};
                                (n[k] = [
                                    y.top.name,
                                    "top-player",
                                    h.TOP_PLAYER_TOP,
                                    h.TOP_PLAYER_LEFT,
                                    h.TOP,
                                    h.TOP_PLAYER_CARD_SIZE,
                                ]),
                                    (n[C] = [
                                        y.left.name,
                                        "left-player",
                                        h.LEFT_PLAYER_TOP,
                                        h.LEFT_PLAYER_LEFT,
                                        h.LEFT,
                                        h.LEFT_PLAYER_CARD_SIZE,
                                    ]),
                                    (n[T] = [
                                        y.right.name,
                                        "right-player",
                                        h.RIGHT_PLAYER_TOP,
                                        h.RIGHT_PLAYER_LEFT,
                                        h.RIGHT,
                                        h.RIGHT_PLAYER_CARD_SIZE,
                                    ]),
                                    (n[w] = [
                                        y.bottom.name,
                                        "bottom-player",
                                        h.BOTTOM_PLAYER_TOP,
                                        h.BOTTOM_PLAYER_LEFT,
                                        h.BOTTOM,
                                        h.BOTTOM_PLAYER_CARD_SIZE,
                                    ]);
                                var i = n[t],
                                    r = i[0],
                                    s = i[1],
                                    o = i[2],
                                    l = i[3],
                                    d = i[4],
                                    c = i[5],
                                    u = new e(r, this.game);
                                return (
                                    (u.top = o),
                                    (u.left = l),
                                    (u.position = d),
                                    (u.id = s),
                                    (u.cardSize = c),
                                    (u.showCards = a),
                                    (u.stats = {}),
                                    u
                                );
                            }),
                            (t.setEventRenderers = function () {
                                var e = this.game;
                                for (var t in e.renderers)
                                    e.setEventRenderer(t, function (e) {
                                        return e.callback();
                                    });
                                var a = this.renderer;
                                e.setEventRenderer("deckready", function (e) {
                                    return a.deckReady(e);
                                }),
                                    e.setEventRenderer("dealcard", function (
                                        e
                                    ) {
                                        return a.dealCard(e);
                                    }),
                                    e.setEventRenderer("selectcard", function (
                                        e
                                    ) {
                                        return a.selectCard(e);
                                    }),
                                    e.setEventRenderer(
                                        "unselectcard",
                                        function (e) {
                                            return a.unselectCard(e);
                                        }
                                    ),
                                    e.setEventRenderer("play", function (e) {
                                        return a.play(e);
                                    }),
                                    e.setEventRenderer("draw", function (e) {
                                        return a.draw(e);
                                    }),
                                    e.setEventRenderer("pass", function (e) {
                                        return a.pass(e);
                                    }),
                                    e.setEventRenderer("sorthand", function (
                                        e
                                    ) {
                                        return a.sortHand(e);
                                    }),
                                    e.setEventRenderer("pickdealer", function (
                                        e
                                    ) {
                                        return a.pickDealer(e);
                                    }),
                                    e.setEventRenderer("startagain", function (
                                        e
                                    ) {
                                        return a.clearTable(e);
                                    }),
                                    e.setEventRenderer("illegalcard", function (
                                        e
                                    ) {
                                        return a.illegalCard(e);
                                    }),
                                    e.setEventRenderer("timeout", function (e) {
                                        return e.callback();
                                    });
                            }),
                            (t.setupSortHandler = function () {
                                var t = this;
                                $("#sortHand").on("click touchstart", function (
                                    e
                                ) {
                                    e.preventDefault(),
                                        t.human.canPlay || t.human.mustDraw
                                            ? t.game.sortHand(
                                                  t.human,
                                                  function () {}
                                              )
                                            : t.game.message(
                                                  "You can only sort when it is your turn to play."
                                              );
                                });
                            }),
                            (t.setupPlayerCountHandler = function () {
                                this.game.canChangePlayerCount &&
                                    (this.playerCount = g.settings.playerCount),
                                    this.multiplayerTable &&
                                        (this.playerCount = this.multiplayerTable.players.length),
                                    2 < this.playerCount &&
                                        $("#left-player").show(),
                                    4 === this.playerCount &&
                                        $("#right-player").show(),
                                    $(
                                        "#player-count-" + this.playerCount
                                    ).addClass("selected");
                                var a = this;
                                $("#player-count button").on(
                                    "click touchstart",
                                    function (e) {
                                        e.preventDefault();
                                        var t = parseInt($(this).data("value"));
                                        (a.playerCount = t),
                                            g.settings.set(
                                                "playerCount",
                                                a.playerCount
                                            ),
                                            a.pickDealer(),
                                            $(
                                                "#player-count button"
                                            ).removeClass("selected"),
                                            $(this).addClass("selected"),
                                            4 === a.playerCount &&
                                                ($("#right-player").fadeIn(),
                                                $("#left-player").fadeIn()),
                                            3 === a.playerCount &&
                                                ($("#right-player").fadeOut(),
                                                $("#left-player").fadeIn()),
                                            2 === a.playerCount &&
                                                ($("#right-player").fadeOut(),
                                                $("#left-player").fadeOut());
                                    }
                                );
                            }),
                            (t.bindCardEventHandlers = function () {
                                var t,
                                    a = this.human,
                                    n = this.game,
                                    i = this.renderer;
                                $(".card").on("mousedown touchstart", function (
                                    e
                                ) {
                                    e.preventDefault(),
                                        (function (e) {
                                            if (e.crushed && a && a.hand) {
                                                var t = a.hand.indexOf(e);
                                                return (
                                                    -1 !== t &&
                                                    ((a.zoomedPos = t),
                                                    i.adjustHand(
                                                        a,
                                                        null,
                                                        r.ANIMATION_SPEED
                                                    ),
                                                    !0)
                                                );
                                            }
                                            return !1;
                                        })(this.card) ||
                                            ("touchstart" === e.type &&
                                            n.canSelectCards
                                                ? ((t = this.card),
                                                  o(function () {
                                                      t &&
                                                          (a.useCard(t, !0),
                                                          (t = null));
                                                  }, 800))
                                                : a.useCard(
                                                      this.card,
                                                      3 == e.which || e.metaKey
                                                  ));
                                }),
                                    n.canSelectCards &&
                                        $(".card").on("touchend", function (e) {
                                            e.preventDefault(),
                                                t === this.card &&
                                                    ((t = null),
                                                    a.useCard(this.card, !1));
                                        }),
                                    $(".card").bind("contextmenu", function (
                                        e
                                    ) {
                                        return !1;
                                    });
                            }),
                            (t.setupStartHandler = function () {
                                var t = this;
                                this.game.setEventRenderer("start", function (
                                    e
                                ) {
                                    $("#sortHand").show(),
                                        t.bindCardEventHandlers(),
                                        t.renderer.start
                                            ? t.renderer.start(e)
                                            : e.callback();
                                });
                            }),
                            (t.multiplayerStartupMessage = function () {
                                2 === this.game.players.length
                                    ? this.game.message(
                                          "Waiting for " +
                                              y.top.name +
                                              " to come online..."
                                      )
                                    : this.game.message(
                                          "Waiting for other players to come online..."
                                      );
                            }),
                            (t.setupMultiplayerGame = function () {
                                var s = this;
                                this.preloadImages(), this.addPlayers();
                                var e = this.game.players,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    var i = n;
                                    (i.multiplayerMoves = []),
                                        (i.multiplayer = !0);
                                }
                                $(
                                    ".face-top-player, .face-right-player, .face-left-player"
                                ).addClass("offline");
                                var r = this.multiplayerTable.players,
                                    o = Array.isArray(r),
                                    l = 0;
                                for (r = o ? r : r[Symbol.iterator](); ; ) {
                                    var d;
                                    if (o) {
                                        if (l >= r.length) break;
                                        d = r[l++];
                                    } else {
                                        if ((l = r.next()).done) break;
                                        d = l.value;
                                    }
                                    var c = d;
                                    $(".face-" + c.pos + "-player").addClass(
                                        "p-" + c.id
                                    );
                                }
                                this.multiplayerStartupMessage(),
                                    $("#open-player-picker").hide(),
                                    $("#player-count").hide(),
                                    (this.client = new b(
                                        v,
                                        this.multiplayerTable,
                                        this.game.players
                                    )),
                                    this.client.on(
                                        "players-ready",
                                        function () {
                                            2 === s.game.players.length
                                                ? s.game.message(
                                                      "Both players are ready, starting the game..."
                                                  )
                                                : s.game.message(
                                                      "All players are ready, starting the game..."
                                                  ),
                                                2 ===
                                                s.multiplayerTable.playerCount
                                                    .maxPlayers
                                                    ? p.startMultiplayerChallengeGame(
                                                          s.game.players[1]
                                                      )
                                                    : p.startGame(
                                                          s.game.players
                                                      ),
                                                s.game.deal(),
                                                f.startGame(),
                                                g.isMobileLookActive() &&
                                                    $("#messageBox").fadeIn();
                                        }
                                    ),
                                    this.client.on("forcequit", function (e) {
                                        s.game.forceQuit(
                                            e.data.player,
                                            e.data.reason
                                        );
                                    }),
                                    $(".multiplayer-start-next-round").attr(
                                        "disabled",
                                        "disabled"
                                    ),
                                    this.client.on("next-table", function (e) {
                                        return s.nextMultiplayerTableReady(e);
                                    }),
                                    this.client.connect(),
                                    this.setupMultiplayerEvents();
                                function u(i) {
                                    var r = s.game.renderers[i];
                                    s.game.renderers[i] = function (e) {
                                        var t = e.player.shouldMakeSubstituteMove();
                                        if (
                                            "bottom-player" === e.player.id ||
                                            t
                                        ) {
                                            var a =
                                                s.multiplayerEventTransforms[i];
                                            if (a) {
                                                var n = a(e);
                                                n
                                                    ? (t
                                                          ? (m.debug(
                                                                "Making substitute move for " +
                                                                    e.player
                                                                        .name
                                                            ),
                                                            (n.playerId =
                                                                e.player.multiplayerId),
                                                            (n.substitute = !0))
                                                          : (n.playerId =
                                                                s.human.multiplayerId),
                                                      s.client.sendMove(n))
                                                    : m.debug(
                                                          "Transform returned null for event " +
                                                              i +
                                                              ", not sending it"
                                                      );
                                            }
                                        }
                                        r(e);
                                    };
                                }
                                for (var h in this.game.renderers) u(h);
                            }),
                            (t.nextMultiplayerTableReady = function () {
                                $(".multiplayer-start-next-round").removeAttr(
                                    "disabled"
                                );
                            }),
                            (t.setupMultiplayerEvents = function () {
                                this.handleMultiplayerEvent(
                                    "selectcard",
                                    function (e) {
                                        return {
                                            type: e.name,
                                            card: e.card.toString(),
                                        };
                                    }
                                ),
                                    this.handleMultiplayerEvent(
                                        "unselectcard",
                                        function (e) {
                                            return {
                                                type: e.name,
                                                card: e.card.toString(),
                                            };
                                        }
                                    ),
                                    this.handleMultiplayerEvent(
                                        "pass",
                                        function (e) {
                                            return {
                                                type: e.name,
                                            };
                                        }
                                    ),
                                    this.handleMultiplayerEvent(
                                        "forcequit",
                                        function (e) {
                                            return {
                                                type: e.name,
                                                reason: e.reason,
                                            };
                                        }
                                    ),
                                    this.handleMultiplayerEvent(
                                        "play",
                                        function (e) {
                                            return {
                                                type: e.name,
                                                random:
                                                    e.cards.some(function (e) {
                                                        return e.random;
                                                    }) || window.undefined,
                                                cards: e.cards.map(function (
                                                    e
                                                ) {
                                                    return e.toString();
                                                }),
                                            };
                                        }
                                    );
                            }),
                            (t.handleMultiplayerEvent = function (e, t) {
                                this.multiplayerEventTransforms[e] = t;
                            }),
                            (t.setupMultiplayerLobby = function () {
                                if (2 === this.game.defaultPlayerCount)
                                    this.lobbyClient = new c(v);
                                else {
                                    var e = {
                                        maxPlayers: this.game
                                            .defaultPlayerCount,
                                    };
                                    this.game.canChangePlayerCount
                                        ? (e.minPlayers = 2)
                                        : (e.minPlayers = e.maxPlayers),
                                        (this.lobbyClient = new d(v, e));
                                }
                            }),
                            (t.setupTurnHandler = function () {
                                var a = this.isTouch;
                                this.game.setEventRenderer(
                                    "playerturn",
                                    function (e) {
                                        if ("bottom-player" === e.player.id)
                                            if (e.game.round <= 3) {
                                                var t =
                                                    "Your turn! Click a card to play.";
                                                e.game.canSelectCards &&
                                                    (t += a
                                                        ? " Press and hold card to select multiple cards."
                                                        : " Right click to select multiple cards."),
                                                    e.game.message(t);
                                            } else e.game.message("Your turn!");
                                        else
                                            e.game.message(
                                                e.player.name + "'s turn!"
                                            );
                                        e.callback();
                                    }
                                );
                            }),
                            (t.preloadImages = function () {
                                for (
                                    var e = 0,
                                        t = [
                                            "cards/horizontal-trick.png",
                                            "cards/vertical-trick.png",
                                            "svg/speech-left.svg",
                                            "svg/speech-right.svg",
                                            "svg/speech-top.svg",
                                            "svg/trophy.svg",
                                        ];
                                    e < t.length;
                                    e++
                                ) {
                                    var a = t[e];
                                    g.preloadImage(
                                        STATIC_ASSET_DOMAIN +
                                            "/shared/images/" +
                                            a
                                    );
                                }
                                2 <= window.devicePixelRatio &&
                                    (g.preloadImage(
                                        STATIC_ASSET_DOMAIN +
                                            "/shared/images/cards/vertical-trick2x.png"
                                    ),
                                    g.preloadImage(
                                        STATIC_ASSET_DOMAIN +
                                            "/shared/images/cards/horizontal-trick2x.png"
                                    ));
                            }),
                            (t.addPlayers = function () {
                                this.multiplayerTable &&
                                    ((this.playerCount = this.multiplayerTable.players.length),
                                    4 === this.playerCount &&
                                        ($("#left-player").fadeIn(),
                                        $("#right-player").fadeIn()),
                                    3 === this.playerCount &&
                                        ($("#left-player").fadeIn(),
                                        $("#right-player").fadeOut()),
                                    2 === this.playerCount &&
                                        ($("#left-player").fadeOut(),
                                        $("#right-player").fadeOut())),
                                    this.game.addPlayer(this.human),
                                    2 < this.playerCount &&
                                        this.game.addPlayer(this.leftPlayer),
                                    this.game.addPlayer(this.topPlayer),
                                    4 == this.playerCount &&
                                        this.game.addPlayer(this.rightPlayer);
                                var e = this.game.players,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    n.stats = {};
                                }
                            }),
                            (t.setupDealHandler = function () {
                                var t = this,
                                    a = this.game;
                                $("#deal").on("click touchstart", function (e) {
                                    for (
                                        e.preventDefault(),
                                            f.startGame(),
                                            0 === a.players.length &&
                                                t.preloadImages(),
                                            2 !== a.defaultPlayerCount &&
                                                $("#multiplayer-button").is(
                                                    ":visible"
                                                ) &&
                                                $(
                                                    "#multiplayer-button"
                                                ).fadeOut();
                                        0 < a.players.length;

                                    )
                                        a.players.pop();
                                    t.addPlayers(),
                                        p.startGame(a.players),
                                        a.message(""),
                                        t.setTestCards(),
                                        a.deal(),
                                        $("#deal").hide(),
                                        $(".show-after-deal").show(),
                                        $("#open-player-picker").hide(),
                                        $("#player-count").hide(),
                                        g.trackEvent(
                                            "StartGame",
                                            t.playerCount + " players",
                                            t.playerCount
                                        );
                                });
                            }),
                            (t.setupRestartHandler = function () {
                                var a = this.game,
                                    n = !!this.multiplayerTable,
                                    i = this.tempStorage;
                                $("#start-new-game").on(
                                    "click touchstart",
                                    function (e) {
                                        var t = $(this).text();
                                        ("Play another hand" !== t &&
                                            "Play next round" !== t) ||
                                            g.cake("autodeal", "1"),
                                            e.preventDefault(),
                                            g.ads.trigger(function () {
                                                if (
                                                    g.isMobileLookActive() &&
                                                    !n
                                                )
                                                    a.startAgain();
                                                else {
                                                    try {
                                                        if (
                                                            g.qs.gid &&
                                                            !i.get(g.qs.gid)
                                                        )
                                                            return void (location.href =
                                                                location.pathname);
                                                    } catch (e) {}
                                                    g.reloadPage();
                                                }
                                            });
                                    }
                                );
                            }),
                            (t.setupMessageHandler = function () {
                                this.game.message = function (e) {
                                    $("#messageBox p").html(
                                        "<span>" + e + "</span>"
                                    );
                                };
                            }),
                            (t.setWinReason = function (e) {
                                "concede" === e.winType
                                    ? "bottom-player" === e.loser.id
                                        ? $("#win-reason").text(
                                              "You surrendered."
                                          )
                                        : $("#win-reason").text(
                                              e.loser.name + " surrendered."
                                          )
                                    : "timeout" === e.winType ||
                                      "localtimeout" === e.winType
                                    ? "bottom-player" === e.loser.id
                                        ? $("#win-reason").text(
                                              "You timed out."
                                          )
                                        : $("#win-reason").text(
                                              e.loser.name + " timed out!"
                                          )
                                    : "abandon" === e.winType
                                    ? "bottom-player" === e.loser.id
                                        ? $("#win-reason").text(
                                              "You disconnected from the game!"
                                          )
                                        : $("#win-reason").text(
                                              e.loser.name +
                                                  " disconnected from the game."
                                          )
                                    : "illegalmove" === e.winType &&
                                      $("#win-reason").text(
                                          e.loser.name +
                                              " sent an illegal move, and lost!"
                                      );
                            }),
                            (t.setupWinHandler = function () {
                                var r = this,
                                    c = this.renderer;
                                this.game.setEventRenderer("win", function (l) {
                                    var d = l.game;
                                    r.multiplayerTable ||
                                        (g.trackEvent("Win", l.player.id),
                                        g.trackEvent("FinishGame")),
                                        r.client &&
                                            (r.client.sendResult({
                                                finished: !0,
                                                winners: [
                                                    l.player.multiplayerId,
                                                ],
                                                endReason: l.winType,
                                            }),
                                            r.tempStorage.remove(g.qs.gid)),
                                        f.finishGame(),
                                        u([l.player.id]),
                                        s.next(),
                                        "bottom-player" === l.player.id
                                            ? $("#result-box h3").text(
                                                  "CONGRATULATIONS!!! YOU WIN!"
                                              )
                                            : $("#result-box h3").text(
                                                  l.player.name.toUpperCase() +
                                                      " WINS!!!"
                                              ),
                                        r.setWinReason(l);
                                    var e = d.players,
                                        t = Array.isArray(e),
                                        a = 0;
                                    for (e = t ? e : e[Symbol.iterator](); ; ) {
                                        var n;
                                        if (t) {
                                            if (a >= e.length) break;
                                            n = e[a++];
                                        } else {
                                            if ((a = e.next()).done) break;
                                            n = a.value;
                                        }
                                        var i = n;
                                        i === l.player
                                            ? (i.stats.result = "win")
                                            : (i.stats.result = "lose");
                                    }
                                    r.multiplayerTable &&
                                    2 ===
                                        r.multiplayerTable.playerCount
                                            .maxPlayers
                                        ? p.finishMultiplayerChallengeGame(
                                              d.players
                                          )
                                        : p.finishGame(d.players),
                                        o(function () {
                                            var e = d.pile,
                                                t = Array.isArray(e),
                                                a = 0;
                                            for (
                                                e = t
                                                    ? e
                                                    : e[Symbol.iterator]();
                                                ;

                                            ) {
                                                var n;
                                                if (t) {
                                                    if (a >= e.length) break;
                                                    n = e[a++];
                                                } else {
                                                    if ((a = e.next()).done)
                                                        break;
                                                    n = a.value;
                                                }
                                                $(n.guiCard).hide();
                                            }
                                            var i = d.deck,
                                                r = Array.isArray(i),
                                                s = 0;
                                            for (
                                                i = r
                                                    ? i
                                                    : i[Symbol.iterator]();
                                                ;

                                            ) {
                                                var o;
                                                if (r) {
                                                    if (s >= i.length) break;
                                                    o = i[s++];
                                                } else {
                                                    if ((s = i.next()).done)
                                                        break;
                                                    o = s.value;
                                                }
                                                $(o.guiCard).hide();
                                            }
                                            $(
                                                "#result-box span.winner-img"
                                            ).css("display", "none"),
                                                $(
                                                    "#result-box span#" +
                                                        l.player.id +
                                                        "-win"
                                                ).css({
                                                    display: "inline-block",
                                                    width: 120,
                                                    height: 120,
                                                }),
                                                $("#messageBox").hide(),
                                                c.showResults();
                                        }, 500);
                                });
                            }),
                            (t.startGame = function () {
                                this.pickDealer(),
                                    this.multiplayerTable &&
                                        (this.game.deckCode = this.multiplayerTable.initialDeck),
                                    this.game.start();
                            }),
                            (t.pickDealer = function () {
                                var e,
                                    t = this,
                                    a =
                                        this.playerCount ||
                                        this.game.defaultPlayerCount;
                                if (
                                    ((e =
                                        2 == a
                                            ? ["bottom-player", "top-player"]
                                            : 3 == a
                                            ? [
                                                  "bottom-player",
                                                  "left-player",
                                                  "top-player",
                                              ]
                                            : [
                                                  "bottom-player",
                                                  "left-player",
                                                  "top-player",
                                                  "right-player",
                                              ]),
                                    this.multiplayerTable)
                                ) {
                                    var n = this.multiplayerTable.players.find(
                                            function (e) {
                                                return (
                                                    e.id ===
                                                    t.multiplayerTable
                                                        .initialDealerId
                                                );
                                            }
                                        ),
                                        i = this.multiplayerTable.players.indexOf(
                                            n
                                        );
                                    --i < 0 &&
                                        (i =
                                            this.multiplayerTable.players
                                                .length - 1),
                                        (this.game.lastDealerIndex = i);
                                }
                                this.game.pickDealer(e);
                            }),
                            (t.extraSetup = function () {}),
                            (t.setTestCards = function () {
                                var e = g.qs,
                                    t = this.game,
                                    a = t.players,
                                    n = Array.isArray(a),
                                    i = 0;
                                for (a = n ? a : a[Symbol.iterator](); ; ) {
                                    var r;
                                    if (n) {
                                        if (i >= a.length) break;
                                        r = a[i++];
                                    } else {
                                        if ((i = a.next()).done) break;
                                        r = i.value;
                                    }
                                    var s,
                                        o = r;
                                    if (e[o.id])
                                        t.fixedCards ||
                                            (t.fixedCards = {
                                                all: [],
                                            }),
                                            (t.fixedCards[o.id] = e[o.id].slice(
                                                0,
                                                e[o.id].length
                                            )),
                                            (s = t.fixedCards.all).push.apply(
                                                s,
                                                e[o.id]
                                            );
                                }
                            }),
                            e
                        );
                    })();
                t.exports = S;
            },
            {
                "../game": 6,
                "../gamecontrol": 7,
                "../helper-functions": 8,
                "../multiplayer/multiplayer-challenge-client": 9,
                "../multiplayer/multiplayer-game-client": 10,
                "../multiplayer/multiplayer-lobby-client": 11,
                "../page": 16,
                "../statistics": 17,
                "../temp-storage": 18,
                "../util": 19,
                "./render": 4,
            },
        ],
        6: [
            function (e, t, a) {
                "use strict";
                var n,
                    l = e("./util"),
                    i = e("./helper-functions"),
                    r = i.captainsLog,
                    s = i._setTimeout,
                    o = i._setInterval,
                    d = l.settings,
                    c = e("./gamecontrol"),
                    u = {
                        h: "&hearts;",
                        s: "&spades;",
                        d: "&diams;",
                        c: "&clubs;",
                    };
                function h() {
                    n && (window.requestAnimationFrame(h), $.fx.tick());
                }
                window.requestAnimationFrame &&
                    (l.qs.gid
                        ? r.debug(
                              "Multiplayer game, not using requestAnimationFrame"
                          )
                        : (($.fx.timer = function (e) {
                              e() &&
                                  jQuery.timers.push(e) &&
                                  !n &&
                                  ((n = !0), h());
                          }),
                          ($.fx.stop = function () {
                              n = !1;
                          })));
                var p =
                    navigator.userAgent.match(/Android (4|5|6|7|8|9)/) &&
                    navigator.userAgent.match(/ SM-|samsung/g);
                l.qs.android && (p = !0),
                    p &&
                        (u = {
                            h: "&#x2661;",
                            s: "&#x2664;",
                            d: "&#x2662;",
                            c: "&#x2667;",
                        });
                var m,
                    f =
                        ((m = 1),
                        {
                            get: function () {
                                return m;
                            },
                            set: function (e) {
                                "string" == typeof e &&
                                    (e = {
                                        verySlow: 0.5,
                                        slow: 0.8,
                                        normal: 1,
                                        fast: 1.5,
                                        veryFast: 2.2,
                                    }[e]),
                                    (m = e),
                                    ($.fx.speeds._default = g(400)),
                                    ($.fx.speeds.fast = g(200)),
                                    ($.fx.speeds.slow = g(600)),
                                    1 != m &&
                                        (y("animate", 1),
                                        y("fadeOut", 0),
                                        y("fadeIn", 0),
                                        (s.speed = m),
                                        (o.speed = m));
                            },
                            toString: function () {
                                return "SPEED: " + m;
                            },
                            ms: g,
                        });
                function g(e) {
                    return e / m;
                }
                function y(e, a) {
                    var n = $.fn[e];
                    $.fn[e] = function () {
                        var e = Array.prototype.slice.call(arguments),
                            t = e[a];
                        return (
                            "number" == typeof t
                                ? (e[a] = g(t))
                                : t &&
                                  t.duration &&
                                  (t.duration = g(t.duration)),
                            n.apply(this, e)
                        );
                    };
                }
                function v(e) {
                    $("#" + e + " div").addClass("sad");
                }
                function b(e) {
                    $("#" + e + " div").removeClass("sad");
                }
                d.speed && "normal" !== d.speed && f.set(d.speed),
                    l.cake("scroll") &&
                        (window.scroll(0, parseInt(l.cake("scroll"))),
                        l.deleteCake("scroll")),
                    document.referrer &&
                        document.referrer.length &&
                        (document.referrer.match(
                            /^https:\/\/cardgames\.io\//
                        ) ||
                            document.referrer.match(/127\.0\.0\.1/) ||
                            l.trackEvent("Referral", document.referrer));
                var w,
                    C,
                    k,
                    T =
                        ((w = ""),
                        (C = {}),
                        (k = 0),
                        $(document).on("keypress", function (e) {
                            var t = new Date().getTime();
                            2e3 < t - k && (w = ""), (k = t);
                            var a = String.fromCharCode(e.which);
                            for (var n in ((w += a), C)) {
                                if (n == w) return C[n](), void (w = "");
                                if (n.substr(0, w.length) == w) return;
                            }
                            for (var i in C)
                                if (i.substr(0, 1) == a) return void (w = a);
                            w = "";
                        }),
                        function (e, t) {
                            C[e] = t;
                        });
                function S(e) {
                    void 0 === e && (e = "");
                    var a = e.split(","),
                        t = r.messages.filter(function (t) {
                            return a.some(function (e) {
                                return (
                                    -1 !==
                                    t
                                        .toLowerCase()
                                        .indexOf(e.trim().toLowerCase())
                                );
                            });
                        });
                    0 === t.length
                        ? $("#matrix textarea").val(
                              "Sorry, no log lines found for term: " + e
                          )
                        : $("#matrix textarea").val(t.join("\n"));
                }
                T("matrix", function () {
                    $("body").toggleClass("matrix");
                    var e = $("#matrix textarea");
                    $("body").hasClass("matrix") &&
                        (S(),
                        e.scrollTop(e[0].scrollHeight),
                        setTimeout(function () {
                            $("#matrix input").val("").focus();
                        }, 200));
                }),
                    $("#matrix-log-filter").on("input", function (e) {
                        var t = $("#matrix-log-filter")
                                .val()
                                .trim()
                                .toLowerCase(),
                            a = $("#matrix textarea");
                        t.match(/^(:q|quit|exit|matrix)$/)
                            ? $("body").removeClass("matrix")
                            : t.match(/fuck/)
                            ? a.val("We're not that kind of site!")
                            : "help" === t
                            ? a.val("What do you need help with?")
                            : "who are you" === t
                            ? a.val("My name is Skynet.")
                            : "skynet" === t
                            ? a.val("Welcome to Cyberdyne systems.")
                            : "shutdown" === t
                            ? a.val("Shutting site down in 5 seconds...")
                            : "cheat" === t
                            ? a.val("Nice try!")
                            : S(t.trim());
                    }),
                    l.qs.autoplay &&
                        ("number" == typeof l.qs.autoplay
                            ? f.set(l.qs.autoplay)
                            : f.set(3)),
                    $(function () {
                        function i(e) {
                            if (void 0 === d) return {};
                            var t = void 0 !== d[e] ? d : l.siteSettings;
                            return void 0 === t[e]
                                ? (r.error("Bad option name: " + e), {})
                                : t;
                        }
                        APP_MODE &&
                            (l.siteSettings.showAdSettingsLink &&
                                $("#ad-settings").css("display", "block"),
                            (window.app = {
                                showAdSettingsLink: function () {
                                    l.siteSettings.set(
                                        "showAdSettingsLink",
                                        !0
                                    ),
                                        $("#ad-settings").css(
                                            "display",
                                            "block"
                                        );
                                },
                                hideAdSettingsLink: function () {
                                    l.siteSettings.set(
                                        "showAdSettingsLink",
                                        !1
                                    ),
                                        $("#ad-settings").hide();
                                },
                            }),
                            $(".game-links a").on("click", function (e) {
                                var t = e.target.href;
                                e.preventDefault(),
                                    l.ads.trigger(function () {
                                        location.href = t;
                                    });
                            }),
                            window.addEventListener("message", function (e) {
                                if ("new-face" === e.data) {
                                    loadPlayerFaces(),
                                        $("#temphidenames").remove(),
                                        $("body").removeClass(
                                            "subview-open avatars-subview-open"
                                        );
                                    var t = $("#title h1").data("real-title");
                                    t && $("#title h1").text(t);
                                }
                            }),
                            $('a[href$="/statistics/"]').on("click", function (
                                e
                            ) {
                                e.preventDefault(),
                                    $("#statistics-subview").attr("src") ||
                                        $("#statistics-subview").attr(
                                            "src",
                                            e.target.href
                                        ),
                                    $("body")
                                        .addClass("subview-open")
                                        .addClass("statistics-subview-open"),
                                    l.mobileMenu.close();
                            }),
                            $('a[href$="/avatars/"]').on("click", function (e) {
                                e.preventDefault();
                                var t = $("#title h1"),
                                    a = t.text();
                                t.data("real-title", a),
                                    t.text("CHANGE PLAYER"),
                                    $("#avatars-subview").attr("src") ||
                                        $("#avatars-subview").attr(
                                            "src",
                                            "/avatars/"
                                        ),
                                    $("body")
                                        .addClass("subview-open")
                                        .addClass("avatars-subview-open"),
                                    l.mobileMenu.close();
                            }),
                            $(".appmode-remove").remove(),
                            $(".game-links a").each(function () {
                                $(this).attr(
                                    "href",
                                    $(this).attr("href") +
                                        "?" +
                                        new Date().getTime()
                                );
                            }),
                            $('a[href="#ad-settings"]').on("click", function (
                                e
                            ) {
                                e.preventDefault(),
                                    l.mobileMenu.close(),
                                    window.Android
                                        ? Android.adSettings()
                                        : window.webkit.messageHandlers.adSettings.postMessage(
                                              "Hi there"
                                          );
                            })),
                            $("#play-page").on("click", function () {}),
                            $('.option-row input[type="radio"]').each(
                                function () {
                                    var e = $(this).attr("name");
                                    i(e)[e] == $(this).val() &&
                                        $(this).prop("checked", !0);
                                }
                            ),
                            $(".option-row input+span").on(
                                "touchstart",
                                function (e) {
                                    $(this).siblings("input").trigger("click"),
                                        e.preventDefault();
                                }
                            ),
                            $('.option-row input[type="radio"]').on(
                                "change",
                                function (e) {
                                    var t = $(this).attr("name"),
                                        a = i(t),
                                        n = $(this).val();
                                    "number" == typeof a[t]
                                        ? a.set(t, parseInt(n))
                                        : a.set(t, n);
                                }
                            ),
                            $('.option-row input[type="checkbox"]').each(
                                function () {
                                    var e = $(this).attr("name"),
                                        t = i(e);
                                    $(this).prop("checked", t[e]);
                                }
                            ),
                            $('.option-row input[type="checkbox"]').on(
                                "change",
                                function (e) {
                                    var t = $(this).attr("name");
                                    i(t).set(t, $(this).is(":checked"));
                                }
                            ),
                            l.siteSettings.addListener(
                                "useDarkTheme",
                                function (e) {
                                    e.value
                                        ? $("html").addClass("dark-theme")
                                        : $("html").removeClass("dark-theme");
                                }
                            ),
                            l.siteSettings.addListener(
                                "holidayThemes",
                                function (e) {
                                    e.value
                                        ? (themes.turnOn(),
                                          l.deleteCake("themeoff"))
                                        : themes.turnOff();
                                }
                            ),
                            l.siteSettings.addListener(
                                "alwaysUseInterstitialAds",
                                function (e) {
                                    $(".don-draper").css(
                                        "visibility",
                                        e.value ? "hidden" : "visible"
                                    );
                                }
                            ),
                            l.siteSettings.addListener("spreadCards", function (
                                e
                            ) {
                                try {
                                    webRenderer._adjustHand(human);
                                } catch (e) {}
                            }),
                            void 0 !== d &&
                                d.addListener("speed", function (e) {
                                    $("#speed-value").text(
                                        {
                                            slow: "Slow",
                                            verySlow: "Very slow",
                                            normal: "Normal",
                                            fast: "Fast",
                                            veryFast: "Very fast",
                                        }[d.speed]
                                    ),
                                        f.set(d.speed);
                                }),
                            $("#facebook-promo a").click(function () {
                                l.trackEvent("FacebookLinkClick");
                            }),
                            s(function () {
                                l.preloadImage(
                                    STATIC_ASSET_DOMAIN +
                                        "/shared/images/svg/trophy.svg"
                                );
                            }, 9e3),
                            $(".avatar").click(function () {
                                l.trackEvent("ClickPlayer", $(this).attr("id"));
                            }),
                            $("#game-options-page button").click(function () {
                                $("body").removeClass("options-open");
                            }),
                            $('a[href="#options"]').click(function (e) {
                                e.preventDefault(),
                                    l.removeConfetti(),
                                    l.mobileMenu.isOpen() &&
                                        l.mobileMenu.close(),
                                    $("body").addClass("options-open"),
                                    $("body").removeClass("multiplayer-open");
                            });
                        void 0 !== d &&
                            $("#speed-value").text(
                                {
                                    verySlow: "Very slow",
                                    slow: "Slow",
                                    normal: "Normal",
                                    fast: "Fast",
                                    veryFast: "Very fast",
                                }[d.speed]
                            ),
                            $('a[href="#newgame"]').click(function (e) {
                                function t() {
                                    l.qs.gid
                                        ? (document.location.href =
                                              document.location.pathname)
                                        : l.isMobileLookActive() &&
                                          c.canRestart()
                                        ? (c.restart(), l.mobileMenu.close())
                                        : l.reloadPage();
                                }
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    l.removeConfetti();
                                var a,
                                    n,
                                    i =
                                        "You have a game in progress. Are you sure you want to start a new game and abandon the current game?";
                                return (
                                    (a = c.isGameStarted()),
                                    (n = c.isGameFinished()),
                                    a
                                        ? n
                                            ? l.cake("results")
                                                ? confirm(i) &&
                                                  (l.cake("results", ""),
                                                  l.trackEvent(
                                                      "NewGame",
                                                      "Finished"
                                                  ),
                                                  l.ads.trigger(t))
                                                : (l.trackEvent(
                                                      "NewGame",
                                                      "Finished"
                                                  ),
                                                  l.ads.trigger(t))
                                            : confirm(i) &&
                                              (l.trackEvent(
                                                  "NewGame",
                                                  "Abandoned"
                                              ),
                                              l.cake("results") &&
                                                  l.cake("results", ""),
                                              l.ads.trigger(t))
                                        : l.cake("results")
                                        ? confirm(i) &&
                                          (l.cake("results", ""),
                                          l.trackEvent("NewGame", "NotStarted"),
                                          l.ads.trigger(t))
                                        : (l.trackEvent(
                                              "NewGame",
                                              "NotStarted"
                                          ),
                                          l.ads.trigger(t)),
                                    !1
                                );
                            });
                        function a(e) {
                            return e && e.toUpperCase().match(/-THX1138$/);
                        }
                        function t() {
                            window.paused
                                ? ((window.paused = !1),
                                  (window.pauseTime +=
                                      new Date().getTime() - window.pausedAt),
                                  $('a[href="#pause"]').text("Pause Game"),
                                  $("#play-page").removeClass("paused"),
                                  $("#pause-notification").hide())
                                : c.isGameFinished() ||
                                  ((window.pauseTime = window.pauseTime || 0),
                                  (window.pausedAt = new Date().getTime()),
                                  (window.paused = !0),
                                  $('a[href="#pause"]').text("Resume Game"),
                                  $("#play-page").addClass("paused"),
                                  $("#pause-notification").show());
                        }
                        a(l.cake("betacode")) &&
                            $("#board").removeClass("beta"),
                            $("#beta-screen button").on("click", function (e) {
                                e.preventDefault();
                                var t = $("#beta-screen input").val();
                                a(t)
                                    ? ($("#board").removeClass("beta"),
                                      l.cake("betacode", t, 20))
                                    : alert("That is not a valid code");
                            }),
                            $('a[href="#rules"],a[href="#about"]').on(
                                "click",
                                function (e) {
                                    e.target.href.match(/#rules/)
                                        ? ($("body").removeClass("about-open"),
                                          $("body").addClass("rules-open"))
                                        : ($("body").removeClass("rules-open"),
                                          $("body").addClass("about-open")),
                                        APP_MODE && e.preventDefault(),
                                        l.mobileMenu.close();
                                }
                            ),
                            $('a[href="#pause"]').click(function (e) {
                                t(), l.mobileMenu.close(), e.preventDefault();
                            }),
                            $("#resume-button").click(function (e) {
                                t(), l.mobileMenu.close(), e.preventDefault();
                            }),
                            $(".theme-off").on("click", function (e) {
                                e.preventDefault(),
                                    l.cake("themeoff", "1", 1, "/"),
                                    $("html").removeClass(themes.current);
                            }),
                            $(window).on("pagehide", function (e) {
                                window.paused ||
                                    (window.pageHiddenAt = new Date().getTime());
                            }),
                            $(window).on("pageshow", function () {
                                if (!window.paused && window.pageHiddenAt) {
                                    var e =
                                        new Date().getTime() -
                                        window.pageHiddenAt;
                                    "undefined" == typeof pauseTime &&
                                        (window.pauseTime = 0),
                                        (window.pauseTime += e);
                                }
                            }),
                            void 0 ===
                                document.createElement("div").style
                                    .webkitTextStroke &&
                                $("html").addClass("no-text-stroke"),
                            (window.startTime = new Date().getTime()),
                            new Date().toString().match(/ May 4 /) &&
                                $("#the-force").text("May the 4th be with you");
                        try {
                            if (!l.isMobileLookActive()) {
                                var e = document.createElement("div");
                                (e.innerHTML = "&nbsp;"),
                                    (e.className = "adsbox"),
                                    document.body.appendChild(e),
                                    setTimeout(function () {
                                        0 === e.offsetHeight
                                            ? $("body").addClass("adblock")
                                            : "3030" !== location.port ||
                                              l.qs.ads ||
                                              $(".don-draper ins").each(
                                                  function () {
                                                      var e = document.createElement(
                                                          "iframe"
                                                      );
                                                      (e.src = "/merchandise/"),
                                                          e.setAttribute(
                                                              "class",
                                                              "dev-ad"
                                                          ),
                                                          (e.frameBorder = 0),
                                                          (e.scrolling = "no"),
                                                          $(this).append(e);
                                                  }
                                              );
                                        e.parentNode.removeChild(e);
                                    }, 100);
                            }
                        } catch (e) {}
                    }),
                    l.browser.supportsSvg ||
                        (function (e) {
                            if (e) {
                                var t = "../";
                                return (
                                    "/" === document.location.pathname &&
                                        (t = ""),
                                    $("#firefox-Logo").attr(
                                        "src",
                                        t + "shared/images/Icon_Mozilla.png"
                                    ),
                                    $("#Chrome-Logo").attr(
                                        "src",
                                        t + "shared/images/Icon_Chrome.png"
                                    ),
                                    $("#oldbrowser").show()
                                );
                            }
                            $("#oldbrowser").hide();
                        })(!0),
                    void 0 !== a &&
                        (t.exports = {
                            loadPlayerFace: function (e, t, a) {
                                var n = l.getFaceUrl(e, !1),
                                    i = l.getFaceUrl(e, !0),
                                    r = l.getHairClass(e);
                                l.createFaceStyleElement(t.substr(1), n, i);
                                var s = $(t + " .face-small"),
                                    o = s.get(0).className.match(/hair-\w+/);
                                o &&
                                    ((o = o[0]),
                                    s.data("original-hair") ||
                                        s.data("original-hair", o),
                                    s.removeClass(o)),
                                    s.addClass(r),
                                    s.data("current-hair", r),
                                    $(t + " small").text(a),
                                    $(t + " .face-small").css("margin", "auto"),
                                    $(t).css(
                                        "margin-left",
                                        "-" + $(t).width() / 2 + "px"
                                    );
                            },
                            addCheat: T,
                            makePlayersSad: function (e) {
                                for (
                                    var t = [
                                            "top-player",
                                            "bottom-player",
                                            "left-player",
                                            "right-player",
                                        ],
                                        a = 0;
                                    a < t.length;
                                    a++
                                )
                                    -1 == e.indexOf(t[a]) ? v(t[a]) : b(t[a]);
                            },
                            makePlayerSad: v,
                            makePlayerHappy: b,
                            makeAllPlayersHappy: function () {
                                $(".avatar div").removeClass("sad");
                            },
                            SPEED: f,
                            HTML_CARD_SUITS: u,
                        });
            },
            {
                "./gamecontrol": 7,
                "./helper-functions": 8,
                "./util": 19,
            },
        ],
        7: [
            function (e, t, a) {
                "use strict";
                var n = "notstarted",
                    i = null;
                t.exports = {
                    isGameNotStarted: function () {
                        return "notstarted" === n;
                    },
                    isGameStarted: function () {
                        return "started" === n;
                    },
                    isGameFinished: function () {
                        return "finished" === n;
                    },
                    isStuck: function () {
                        return "stuck" === n;
                    },
                    startGame: function () {
                        n = "started";
                    },
                    finishGame: function () {
                        n = "finished";
                    },
                    stuck: function () {
                        n = "stuck";
                    },
                    resetGameStatus: function () {
                        n = "notstarted";
                    },
                    addRestartHandler: function (e) {
                        i = e;
                    },
                    canRestart: function () {
                        return null !== i;
                    },
                    restart: function () {
                        if (null === i)
                            throw new Error(
                                'No restart handler has been registered. Check "canRestart()" before calling this function'
                            );
                        i();
                    },
                };
            },
            {},
        ],
        8: [
            function (e, t, a) {
                "use strict";
                var s = {
                        x: -1,
                        m: Math.pow(2, 32),
                        a: 1664525,
                        b: 1013904223,
                        init: function (e) {
                            void 0 === e && (e = -1),
                                (this.x =
                                    -1 == e
                                        ? Math.floor(Math.random() * this.m)
                                        : e);
                        },
                        next: function () {
                            return (
                                -1 == this.x && this.init(),
                                (this.x = (this.a * this.x + this.b) % this.m),
                                this.x / (this.m - 1)
                            );
                        },
                    },
                    n = {
                        shuffle: function (e, t) {
                            void 0 === t && (t = -1);
                            var a = e.length;
                            if (0 !== a)
                                for (s.init(t); --a; ) {
                                    var n = Math.floor(s.next() * (a + 1)),
                                        i = e[a],
                                        r = e[n];
                                    (e[a] = r), (e[n] = i);
                                }
                        },
                        remove: function (e, t) {
                            var a = e.indexOf(t);
                            return -1 !== a && (e.splice(a, 1), !0);
                        },
                        random: function (e) {
                            return e[Math.floor(Math.random() * e.length)];
                        },
                    };
                var i = {
                    info: function (e) {
                        this.messages.push("INFO: " + e),
                            this.level.match(/info|verbose|debug/) &&
                                (console.info
                                    ? console.info(e)
                                    : console.log("INFO: " + e));
                    },
                    messages: [],
                    error: function (e) {
                        this.messages.push("ERROR: " + e),
                            console.error
                                ? console.error(e)
                                : console.log("ERROR: " + e);
                    },
                    debug: function (e) {
                        this.messages.push("DEBUG: " + e),
                            "debug" == this.level &&
                                (console.debug
                                    ? console.debug(e)
                                    : console.log("DEBUG: " + e));
                    },
                    warn: function (e) {
                        this.messages.push("WARN: " + e),
                            this.level.match(/info|verbose|warn|debug/) &&
                                (console.warn
                                    ? console.warn(e)
                                    : console.log("WARN: " + e));
                    },
                    toString: function () {
                        return "gott log ";
                    },
                    level: "info",
                };
                function r(e, t) {
                    return (
                        1 !== r.speed && (t = Math.floor(t / r.speed)),
                        setTimeout(e, t)
                    );
                }
                function o(e, t) {
                    return (
                        1 !== o.speed && (t = Math.floor(t / o.speed)),
                        setInterval(e, t)
                    );
                }
                (o.speed = r.speed = 1),
                    void 0 !== a &&
                        (t.exports = {
                            captainsLog: i,
                            dataBind: function (e, s) {
                                return e.replace(/@(\w+(\.\w+)*)/g, function (
                                    e,
                                    t
                                ) {
                                    for (
                                        var a, n = t.split("."), i = s, r = 0;
                                        r < n.length;
                                        r++
                                    ) {
                                        if (((a = n[r]), void 0 === i))
                                            return "<undefined>";
                                        if (null === i || null === i[a])
                                            return "<null>";
                                        if (void 0 === i[a])
                                            return "<undefined>";
                                        i = i[a];
                                    }
                                    return "" + i;
                                });
                            },
                            _setTimeout: r,
                            _setInterval: o,
                            randomInt: function (e, t) {
                                return (
                                    Math.floor(Math.random() * (t - e + 1)) + e
                                );
                            },
                            ArrayUtils: n,
                            addDelaysToFunctions: function (e, t) {
                                function a(e, t, a) {
                                    var n = e[t];
                                    if (!n)
                                        throw new Error(
                                            "Unrecognized func name: " + t
                                        );
                                    e[t] = function () {
                                        var e = this,
                                            t = arguments;
                                        r(function () {
                                            n.apply(e, t);
                                        }, a);
                                    };
                                }
                                for (var n in t) {
                                    a(e, n, t[n]);
                                }
                            },
                            cson: function (e) {
                                return "undefined" == typeof JSON
                                    ? "JSON Not Available"
                                    : JSON.stringify(
                                          (function e(t) {
                                              var a = Object.prototype.toString;
                                              if ("undefined" == typeof JSON)
                                                  return "JSON Not Available";
                                              if (null == t) return t;
                                              if (t.name || t.shortName)
                                                  return t.name || t.shortName;
                                              if (
                                                  "[object Array]" == a.call(t)
                                              ) {
                                                  for (
                                                      var n = [], i = 0;
                                                      i < t.length;
                                                      i++
                                                  )
                                                      n.push(e(t[i]));
                                                  return n;
                                              }
                                              if (
                                                  "[object Object]" != a.call(t)
                                              )
                                                  return t;
                                              var r = {};
                                              for (var s in t) r[s] = e(t[s]);
                                              return r;
                                          })(e),
                                          null,
                                          2
                                      )
                                          .replace(
                                              /\s*"([HSDC]\d\d?)"\s*(\]|,)/gm,
                                              "$1$2"
                                          )
                                          .replace(/"([HSDC]\d\d?)"/gm, "$1");
                            },
                        });
            },
            {},
        ],
        9: [
            function (e, t, a) {
                "use strict";
                var o = e("../util"),
                    n = e("./multiplayer-util"),
                    i = n.normalizeTable,
                    r = n.randomId,
                    s = n.setupMultiplayerLogging,
                    l = e("../helper-functions").captainsLog,
                    d = e("../statistics"),
                    c = e("../temp-storage"),
                    u = e("./name-handler"),
                    h = (function () {
                        function e(e) {
                            var t = this;
                            (this.slug = e),
                                (this.tempStorage = new c(e)),
                                s(),
                                o.siteSettings.multiplayerPublicId ||
                                    (o.siteSettings.set(
                                        "multiplayerPublicId",
                                        r()
                                    ),
                                    o.siteSettings.set(
                                        "multiplayerPrivateId",
                                        r()
                                    )),
                                (this.publicId =
                                    o.siteSettings.multiplayerPublicId),
                                (this.privateId =
                                    o.siteSettings.multiplayerPrivateId),
                                (this.playerInfo = {}),
                                (this.declineCount = 0),
                                this.setupEventHandlers(),
                                u(
                                    function () {
                                        return t.newNameReady();
                                    },
                                    function (e) {
                                        return t.changedNameReady(e);
                                    }
                                );
                            var a = this.tempStorage.get("connectlobby");
                            a &&
                                a > new Date().getTime() &&
                                !o.qs.gid &&
                                this.connect();
                        }
                        var t = e.prototype;
                        return (
                            (t.newNameReady = function () {
                                $(".multiplayer-lobby-link").click();
                            }),
                            (t.changedNameReady = function (e) {
                                e.newName !== e.oldName &&
                                    ($(
                                        ".player-" +
                                            o.siteSettings.multiplayerPublicId +
                                            " small"
                                    ).text(o.siteSettings.playerName),
                                    this.socket.emit(
                                        "name-change",
                                        o.siteSettings.playerName
                                    ));
                            }),
                            (t.message = function (e) {
                                $("#challenge-lobby-message").text(e);
                            }),
                            (t.showCover = function () {
                                $("#cover").fadeIn(200);
                            }),
                            (t.hideCover = function () {
                                $("#cover").fadeOut(200);
                            }),
                            (t.showDialog = function (e) {
                                this.showCover(), $(e).show();
                            }),
                            (t.hideDialog = function (e) {
                                $(e).hide(),
                                    "#multiplayer-challenge-lobby" !== e &&
                                    this.lobbyWindowOpen
                                        ? $(
                                              "#multiplayer-challenge-lobby"
                                          ).show()
                                        : this.hideCover();
                            }),
                            (t.setupEventHandlers = function () {
                                function e(e, t) {
                                    return $(e).on("click", t.bind(a));
                                }
                                var a = this;
                                e(
                                    ".multiplayer-lobby-link",
                                    this.openMultiplayerLobby
                                ),
                                    e(
                                        ".close-multiplayer",
                                        this.closeMultiplayerLobby
                                    ),
                                    e(
                                        "#disconnect-lobby",
                                        this.manualDisconnect
                                    ),
                                    e(".close-dialog", this.closeAllDialogs),
                                    $(".online-players-list").on(
                                        "click",
                                        ".online-player",
                                        function (e) {
                                            return a.sendChallenge(e);
                                        }
                                    ),
                                    e("#cancel-invite", this.cancelChallenge),
                                    e(
                                        "#accept-multiplayer",
                                        this.acceptChallenge
                                    ),
                                    e(
                                        "#decline-multiplayer",
                                        this.declineChallenge
                                    );
                            }),
                            (t.setupMessageHandlers = function () {
                                function e(e, t) {
                                    return a.socket.on(e, t.bind(a));
                                }
                                var a = this;
                                e("connect", this.onConnect),
                                    e("disconnect", this.onDisconnect),
                                    e("connect_error", this.onConnectError),
                                    e("reconnection", this.onReconnect),
                                    e("start-game", this.onStartGame),
                                    e(
                                        "players-online-full",
                                        this.onPlayersOnlineFull
                                    ),
                                    e(
                                        "players-online-delta",
                                        this.onPlayersOnlineDelta
                                    ),
                                    e("online-count", this.onOnlineCount),
                                    e("name-change", this.onNameChange),
                                    e(
                                        "challenge-received",
                                        this.challengeReceived
                                    ),
                                    e(
                                        "challenge-accepted",
                                        this.challengeAccepted
                                    ),
                                    e(
                                        "challenge-declined",
                                        this.challengeDeclined
                                    ),
                                    e(
                                        "challenge-cancelled",
                                        this.challengeCancelled
                                    ),
                                    e("update-app", this.onUpdateApp);
                            }),
                            (t.createConnectionUrl = function () {
                                var e,
                                    t = this.slug;
                                return (
                                    (e =
                                        "cardgames.io" === location.hostname ||
                                        "production" === o.qs.server ||
                                        APP_MODE
                                            ? "https://" + t + ".cardgames.io/"
                                            : "https://dev.cardgames.io:3031/"),
                                    (e += "lobby"),
                                    (e +=
                                        "?face=" +
                                        o.siteSettings.players.bottom.code +
                                        "&name=" +
                                        o.siteSettings.playerName +
                                        "&publicId=" +
                                        this.publicId +
                                        "&privateId=" +
                                        this.privateId +
                                        "&clientversion=" +
                                        siteVersion +
                                        "&game=" +
                                        t +
                                        "&type=challenge")
                                );
                            }),
                            (t.openMultiplayerLobby = function (e) {
                                var t = this;
                                e.preventDefault(),
                                    o.mobileMenu.close(),
                                    (this.lobbyWindowOpen = !0);
                                try {
                                    window.sessionStorage.getItem("nothing");
                                } catch (e) {
                                    return (
                                        this.showDialog("#no-cookies"),
                                        $("#no-cookies").show(),
                                        void $("#no-cookies button").on(
                                            "click",
                                            function (e) {
                                                t.hideDialog("#no-cookies");
                                            }
                                        )
                                    );
                                }
                                if (
                                    !o.siteSettings.playerName ||
                                    "You" === o.siteSettings.playerName
                                )
                                    return (
                                        this.showDialog("#enter-name"),
                                        void $("#name-new").focus()
                                    );
                                if (
                                    (this.showDialog(
                                        "#multiplayer-challenge-lobby"
                                    ),
                                    o.isMobileLookActive())
                                ) {
                                    var a = $(
                                            "#challenge-lobby-message"
                                        ).height(),
                                        n =
                                            $(
                                                "#multiplayer-challenge-lobby .button-container"
                                            ).position().top -
                                            a -
                                            52 -
                                            20;
                                    $(".online-players-list").height(
                                        Math.floor(n)
                                    );
                                }
                                this.setReconnectExpiry(),
                                    this.connect(),
                                    this.socket &&
                                        this.socket.connected &&
                                        this.socket.emit("open-lobby-window");
                            }),
                            (t.closeMultiplayerLobby = function () {
                                this.hideDialog("#multiplayer-challenge-lobby"),
                                    this.socket.emit("close-lobby-window"),
                                    (this.lobbyWindowOpen = !1);
                            }),
                            (t.setReconnectExpiry = function () {
                                var e = new Date().getTime() + 18e5;
                                this.tempStorage.set("connectlobby", e);
                            }),
                            (t.closeAllDialogs = function () {
                                $(".multiplayer-dialog").hide(),
                                    this.lobbyWindowOpen
                                        ? $(
                                              "#multiplayer-challenge-lobby"
                                          ).show()
                                        : this.hideCover();
                            }),
                            (t.onUpdateApp = function () {
                                this.disconnect(),
                                    $("#multiplayer-button").text(
                                        "Multiplayer"
                                    ),
                                    this.message(
                                        "Hi. It looks like you're using an old version of our app. Please update to the latest version to continue playing our multiplayer games 😎."
                                    ),
                                    $("#disconnect-lobby").hide(),
                                    this.tempStorage.remove("connectlobby"),
                                    (this.lobbyWindowOpen = !1);
                            }),
                            (t.manualDisconnect = function (e) {
                                e.preventDefault(),
                                    this.disconnect(),
                                    $("#multiplayer-button").text(
                                        "Multiplayer"
                                    ),
                                    $(".multiplayer-dialog").hide(),
                                    this.showDialog("#manual-disconnect"),
                                    this.tempStorage.remove("connectlobby"),
                                    (this.lobbyWindowOpen = !1);
                            }),
                            (t.onStartGame = function (e) {
                                i(e, this.publicId),
                                    this.tempStorage.set(e.id, e),
                                    (this.isStarting = !0),
                                    d.cancelGame(),
                                    (location.href =
                                        "/" + this.slug + "/?gid=" + e.id);
                            }),
                            (t.setOnlineCount = function (e) {
                                10 <= e
                                    ? $("#multiplayer-button").text(
                                          "Online (10+)"
                                      )
                                    : $("#multiplayer-button").text(
                                          "Online (" + e + ")"
                                      ),
                                    e <= 1
                                        ? this.message(
                                              'You are the only player online. Just click "Close", if more players come online they\'ll see you and can challenge you to a game.'
                                          )
                                        : this.message(
                                              'These players are currently online. Click on them to challenge them to a game. You can also just click on "Close" and wait until one of them challenges you.'
                                          );
                            }),
                            (t.onPlayersOnlineFull = function (e) {
                                $("#connection-error").remove(),
                                    $(".online-player").each(function () {
                                        var t = $(this).data("id");
                                        e.find(function (e) {
                                            return e.id === t;
                                        }) || $(this).remove();
                                    });
                                var t = e,
                                    a = Array.isArray(t),
                                    n = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var i;
                                    if (a) {
                                        if (n >= t.length) break;
                                        i = t[n++];
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value;
                                    }
                                    var r = i;
                                    0 === $(".player-" + r.id).length &&
                                        this.createPlayerDiv(r),
                                        (this.playerInfo[r.id] = r);
                                }
                                this.setOnlineCount(e.length),
                                    this.updateScrollBars();
                            }),
                            (t.onNameChange = function (e, t) {
                                e !== o.siteSettings.multiplayerPublicId &&
                                    $(".player-" + e + " small").text(t);
                            }),
                            (t.updateScrollBars = function () {
                                var e = $(".online-players-list"),
                                    t = e.get(0);
                                t.scrollHeight > t.clientHeight
                                    ? e.addClass("large")
                                    : e.removeClass("large");
                            }),
                            (t.onOnlineCount = function (e) {
                                this.setOnlineCount(e);
                            }),
                            (t.sendChallenge = function (e) {
                                var t = $(e.currentTarget).data("id");
                                if (
                                    ((this.declineCount = 0),
                                    t === o.siteSettings.multiplayerPublicId)
                                )
                                    return (
                                        $(
                                            "#multiplayer-challenge-lobby"
                                        ).hide(),
                                        $("#challenge-yourself input").val(
                                            o.siteSettings.playerName
                                        ),
                                        setTimeout(function () {
                                            return $(
                                                "#challenge-yourself input"
                                            ).focus();
                                        }, 200),
                                        void this.showDialog(
                                            "#challenge-yourself"
                                        )
                                    );
                                (this.opponent = this.playerInfo[t]),
                                    this.socket.emit("send-challenge", t),
                                    o.preloadBackgroundImage(
                                        o.getFaceUrl(this.opponent.face, !0)
                                    ),
                                    this.showChallengeDialog("#challenge-sent");
                            }),
                            (t.cancelChallenge = function () {
                                this.socket.emit(
                                    "cancel-challenge",
                                    this.opponent.id
                                ),
                                    this.lobbyWindowOpen
                                        ? ($("#challenge-sent").hide(),
                                          $(
                                              "#multiplayer-challenge-lobby"
                                          ).show())
                                        : this.hideDialog("#challenge-sent"),
                                    delete this.opponent;
                            }),
                            (t.acceptChallenge = function () {
                                (this.lobbyWindowOpen = !1),
                                    this.socket.emit(
                                        "accept-challenge",
                                        this.opponent.id
                                    ),
                                    this.showChallengeDialog(
                                        "#challenge-accepted-you"
                                    ),
                                    (this.declineCount = 0);
                            }),
                            (t.declineChallenge = function () {
                                this.socket.emit(
                                    "decline-challenge",
                                    this.opponent.id
                                ),
                                    this.hideDialog("#challenge-received"),
                                    delete this.opponent,
                                    this.declineCount++,
                                    this.checkForDeclineLimit();
                            }),
                            (t.checkForDeclineLimit = function () {
                                6 <= this.declineCount &&
                                    (this.disconnect(),
                                    $("#multiplayer-button").text(
                                        "Multiplayer"
                                    ),
                                    $("#cover").hide(),
                                    $(".multiplayer-dialog").hide(),
                                    this.tempStorage.remove("connectlobby"),
                                    (this.lobbyWindowOpen = !1),
                                    (this.declineCount = 0));
                            }),
                            (t.showChallengeDialog = function (e, t) {
                                void 0 === t && (t = !1),
                                    $(".multiplayer-dialog").hide(),
                                    $(e + " p span").text(this.opponent.name);
                                var a = o.getFaceUrl(this.opponent.face, t);
                                $(e + " .player-image").css(
                                    "background-image",
                                    "url(" + a + ")"
                                ),
                                    this.showDialog(e);
                            }),
                            (t.challengeReceived = function (e) {
                                (this.opponent = e),
                                    o.preloadBackgroundImage(
                                        o.getFaceUrl(this.opponent.face, !0)
                                    ),
                                    this.showChallengeDialog(
                                        "#challenge-received"
                                    );
                            }),
                            (t.challengeAccepted = function () {
                                (this.lobbyWindowOpen = !1),
                                    this.showChallengeDialog(
                                        "#challenge-accepted"
                                    );
                            }),
                            (t.challengeCancelled = function (e) {
                                if (this.opponent)
                                    if (this.opponent.id === e) {
                                        if (
                                            $("#challenge-accepted-you").is(
                                                ":visible"
                                            )
                                        )
                                            return (
                                                this.showChallengeDialog(
                                                    "#challenge-cancelled",
                                                    !0
                                                ),
                                                void delete this.opponent
                                            );
                                        if (
                                            $("#challenge-received").is(
                                                ":visible"
                                            )
                                        )
                                            return (
                                                this.showChallengeDialog(
                                                    "#challenge-cancelled",
                                                    !0
                                                ),
                                                this.declineCount++,
                                                this.checkForDeclineLimit(),
                                                void delete this.opponent
                                            );
                                        l.debug(
                                            "Ignoring cancelled challenge from " +
                                                this.opponent.name +
                                                ", we have no dialog showing!"
                                        ),
                                            delete this.opponent;
                                    } else
                                        l.debug(
                                            "Ignoring cancelled challenge from id=" +
                                                e +
                                                ", we are being challenged by " +
                                                this.opponent.name
                                        );
                                else
                                    l.debug(
                                        "Ignoring cancelled challenge from id=" +
                                            e
                                    );
                            }),
                            (t.challengeDeclined = function (e, t) {
                                if (this.opponent && this.opponent.id === e) {
                                    var a = [
                                        "Probably afraid of you.",
                                        "Maybe they had to go wash their hair.",
                                        "Maybe they spontaneously combusted.",
                                        "Perhaps they had a food related emergency.",
                                        "Probably knew how good you are at this game.",
                                        "Maybe afraid to lose!",
                                    ];
                                    l.debug("invite-rejected, reason=" + t);
                                    var n =
                                            a[
                                                Math.floor(
                                                    Math.random() * a.length
                                                )
                                            ],
                                        i = this.opponent.name,
                                        r =
                                            "Sorry, " +
                                            i +
                                            " declined your challenge. " +
                                            n;
                                    "disconnected" === t
                                        ? (r =
                                              i +
                                              " has just disconnected and can't accept your challenge. Try someone else.")
                                        : "challenging" === t
                                        ? (r =
                                              i +
                                              " is currently challenging someone else and can't reply to your challenge. Try someone else.")
                                        : "challenged" === t &&
                                          (r =
                                              i +
                                              " is currently being challenged by someone else and can't respond to your challenge. Try someone else."),
                                        $("#challenge-declined p").text(r),
                                        this.showChallengeDialog(
                                            "#challenge-declined",
                                            !0
                                        ),
                                        delete this.opponent;
                                }
                            }),
                            (t.onPlayersOnlineDelta = function (e) {
                                var t = e.newPlayers,
                                    a = Array.isArray(t),
                                    n = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var i;
                                    if (a) {
                                        if (n >= t.length) break;
                                        i = t[n++];
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value;
                                    }
                                    var r = i;
                                    0 === $(".player-" + r.id).length &&
                                        this.createPlayerDiv(r),
                                        (this.playerInfo[r.id] = r);
                                }
                                var s = function () {
                                        if (l) {
                                            if (d >= o.length) return "break";
                                            c = o[d++];
                                        } else {
                                            if ((d = o.next()).done)
                                                return "break";
                                            c = d.value;
                                        }
                                        var e = $(".player-" + c);
                                        e.fadeOut(function () {
                                            return e.remove();
                                        });
                                    },
                                    o = e.removedPlayerIds,
                                    l = Array.isArray(o),
                                    d = 0;
                                for (o = l ? o : o[Symbol.iterator](); ; ) {
                                    var c;
                                    if ("break" === s()) break;
                                }
                                this.message(
                                    'These players are currently online. Click on them to challenge them to a game. You can also just click on "Close" and wait until one of them challenges you.'
                                ),
                                    this.setOnlineCount(
                                        $(".online-player").length -
                                            e.removedPlayerIds.length
                                    ),
                                    this.updateScrollBars(),
                                    $("#connection-error").remove();
                            }),
                            (t.createPlayerDiv = function (e) {
                                var t = $("<span>")
                                        .addClass("online-player")
                                        .addClass("player-" + e.id)
                                        .data("id", e.id)
                                        .data("face", e.face),
                                    a =
                                        "hair-" +
                                        (e.face.length <= 2
                                            ? e.face
                                            : e.face.charAt(2)),
                                    n = e.name;
                                e.id === this.publicId &&
                                    n !== o.siteSettings.playerName &&
                                    (n = o.siteSettings.playerName);
                                var i = o.getFaceUrl(e.face, !1),
                                    r = $("<div>")
                                        .addClass("face-small")
                                        .addClass(a)
                                        .css(
                                            "background-image",
                                            "url(" + i + ")"
                                        ),
                                    s = $("<small>").text(n);
                                t.append(r).append(s),
                                    t.appendTo(".online-players-list");
                            }),
                            (t.showMessageBox = function (e, t) {
                                $("#error-message-box h3").text(e),
                                    $("#error-message-box p").text(t),
                                    $("#error-message-box").show();
                            }),
                            (t.connect = function () {
                                if (o.qs.gid)
                                    this.message(
                                        "You are already playing a multiplayer game, you can't start another one right now"
                                    );
                                else {
                                    if (!this.socket) {
                                        var e = this.createConnectionUrl();
                                        l.debug("Connection url: " + e),
                                            (this.socket = io(e, {
                                                reconnection: !0,
                                                reconnectAttempts: 10,
                                            })),
                                            this.setupMessageHandlers();
                                    }
                                    this.socket.connected ||
                                        this.socket.connect();
                                }
                            }),
                            (t.disconnect = function () {
                                this.socket &&
                                    this.socket.connected &&
                                    this.socket.disconnect();
                            }),
                            (t.onDisconnect = function (e) {
                                l.debug("Socket disconnected: " + e);
                            }),
                            (t.onConnect = function () {
                                l.debug("Socket connected"),
                                    $("#connection-error").remove(),
                                    $("#multiplayer-challenge-lobby").is(
                                        ":visible"
                                    ) && this.socket.emit("open-lobby-window"),
                                    this.setupVisibilityHandling();
                            }),
                            (t.setupVisibilityHandling = function () {
                                var e = this;
                                if (!this.hasSetupVisibilityHandling) {
                                    var t = !1;
                                    document.addEventListener(
                                        "visibilitychange",
                                        function () {
                                            "hidden" ===
                                                document.visibilityState &&
                                                e.socket &&
                                                e.socket.connected &&
                                                ((t = !0),
                                                l.debug(
                                                    "Disconnecting, page is hidden"
                                                ),
                                                e.disconnect()),
                                                "visible" ===
                                                    document.visibilityState &&
                                                    t &&
                                                    (e.connect(),
                                                    l.debug(
                                                        "Connecting, page is visible again!"
                                                    ),
                                                    (t = !1));
                                        }
                                    ),
                                        (this.hasSetupVisibilityHandling = !0);
                                }
                            }),
                            (t.onReconnect = function (e) {
                                l.debug("Reconnected: " + e),
                                    $("#multiplayer-challenge-lobby").is(
                                        ":visible"
                                    ) && this.socket.emit("open-lobby-window");
                            }),
                            (t.onConnectError = function (e) {
                                l.error("Connection error: " + e),
                                    0 === $("#connection-error").length &&
                                        $(".online-players-list").html(
                                            $("<div/>")
                                                .attr("id", "connection-error")
                                                .text("CONNECTION ERROR 😟")
                                                .append(
                                                    $("<div/>").text(
                                                        "Trying to reconnect..."
                                                    )
                                                )
                                        ),
                                    this.message("");
                            }),
                            e
                        );
                    })();
                t.exports = h;
            },
            {
                "../helper-functions": 8,
                "../statistics": 17,
                "../temp-storage": 18,
                "../util": 19,
                "./multiplayer-util": 12,
                "./name-handler": 13,
            },
        ],
        10: [
            function (e, t, a) {
                "use strict";
                var s = e("../util"),
                    o = e("../helper-functions").captainsLog,
                    n = e("./multiplayer-util").normalizeTable,
                    i = e("./speech-handler"),
                    r = e("../temp-storage"),
                    l = (function () {
                        function e(e, t, a) {
                            var n = this;
                            (this.slug = e),
                                (this.table = t),
                                (this.players = a),
                                (this.publicId =
                                    s.siteSettings.multiplayerPublicId),
                                (this.privateId =
                                    s.siteSettings.multiplayerPrivateId),
                                (this.handlers = {}),
                                (this.speechHandler = new i(function (e) {
                                    return n.sendPhrase(e);
                                })),
                                (this.receivedMoves = [
                                    {
                                        nr: 0,
                                    },
                                ]),
                                (this.sentMoves = [
                                    {
                                        nr: 0,
                                    },
                                ]),
                                (this.tempStorage = new r(e)),
                                this.setupSubstituteMoves(),
                                this.setupConcedeHandler(),
                                $(document).on("visibilitychange", function () {
                                    return n.visibilityChange();
                                }),
                                window.addEventListener(
                                    "beforeunload",
                                    function () {
                                        return n.beforeUnloadWindow();
                                    }
                                );
                        }
                        var t = e.prototype;
                        return (
                            (t.setupSubstituteMoves = function () {
                                var i = this,
                                    r = this.players,
                                    e = function () {
                                        if (a) {
                                            if (s >= t.length) return "break";
                                            o = t[s++];
                                        } else {
                                            if ((s = t.next()).done)
                                                return "break";
                                            o = s.value;
                                        }
                                        var n = o;
                                        "bottom-player" === n.id
                                            ? (n.shouldMakeSubstituteMove = function () {
                                                  return !1;
                                              })
                                            : (n.shouldMakeSubstituteMove = function () {
                                                  if (!n.offline) return !1;
                                                  if (
                                                      (new Date().getTime() -
                                                          n.offline) /
                                                          1e3 <
                                                      10
                                                  )
                                                      return !1;
                                                  for (
                                                      var e = r.indexOf(n),
                                                          t = e + 1;
                                                      t <= e + 3;
                                                      t++
                                                  ) {
                                                      var a = r[t % r.length];
                                                      if (!a.offline)
                                                          return (
                                                              a.multiplayerId ===
                                                              i.publicId
                                                          );
                                                  }
                                                  return !1;
                                              });
                                    },
                                    t = this.players,
                                    a = Array.isArray(t),
                                    s = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var o;
                                    if ("break" === e()) break;
                                }
                            }),
                            (t.on = function (e, t) {
                                this.handlers[e] || (this.handlers[e] = []),
                                    this.handlers[e].push(t);
                            }),
                            (t.fireEvent = function (e, t) {
                                if (this.handlers[e]) {
                                    var a = this.handlers[e],
                                        n = Array.isArray(a),
                                        i = 0;
                                    for (a = n ? a : a[Symbol.iterator](); ; ) {
                                        var r;
                                        if (n) {
                                            if (i >= a.length) break;
                                            r = a[i++];
                                        } else {
                                            if ((i = a.next()).done) break;
                                            r = i.value;
                                        }
                                        r({
                                            type: e,
                                            data: t,
                                        });
                                    }
                                }
                            }),
                            (t.beforeUnloadWindow = function () {
                                this.gameFinished ||
                                    2 !== this.table.playerCount.maxPlayers ||
                                    this.sendMove({
                                        type: "forcequit",
                                        reason: "abandon",
                                        playerId: this.players[0].multiplayerId,
                                    });
                            }),
                            (t.visibilityChange = function () {
                                this.gameFinished ||
                                    ("visible" === document.visibilityState
                                        ? this.socket.connected &&
                                          (this.socket.emit("visible"),
                                          (this.hidden = !1))
                                        : "hidden" ===
                                              document.visibilityState &&
                                          this.socket.connected &&
                                          (this.socket.emit("hidden"),
                                          (this.hidden = !0)));
                            }),
                            (t.connect = function () {
                                var a = this,
                                    e = this.slug,
                                    t = s.siteSettings.players.bottom.code,
                                    n = s.siteSettings.playerName;
                                if (!t || !n)
                                    throw new Error(
                                        "No face or name, no connection can be made"
                                    );
                                var i =
                                    "https://" + this.table.hostname + "/lobby";
                                (i +=
                                    "?face=" +
                                    t +
                                    "&name=" +
                                    n +
                                    "&publicId=" +
                                    this.publicId +
                                    "&privateId=" +
                                    this.privateId +
                                    "&clientversion=" +
                                    siteVersion +
                                    "&game=" +
                                    e +
                                    "&tableId=" +
                                    this.table.id +
                                    "&round=" +
                                    this.table.round),
                                    o.debug("Connecting to " + i);
                                this.socket = io(i, {
                                    reconnection: !0,
                                    reconnectAttempts: 10,
                                });
                                function r(e, t) {
                                    return a.socket.on(e, t.bind(a));
                                }
                                r("connect", this.onConnect),
                                    r("disconnect", this.onDisconnect),
                                    r("player-online", this.onPlayerOnline),
                                    r("player-offline", this.onPlayerOffline),
                                    r("table-state", this.onTableState),
                                    r("players-ready", this.onPlayersReady),
                                    r("move", this.onMove),
                                    r("next-table", this.onNextTable),
                                    r("speak", this.onSpeak),
                                    r("table-not-found", this.onTableNotFound),
                                    r("get-out", this.onGetOut),
                                    r("sync-moves", this.onSyncMoves),
                                    r("migrate", this.onMigrate),
                                    $(".exit-multiplayer-game").on(
                                        "click",
                                        function () {
                                            return (location.href =
                                                location.pathname);
                                        }
                                    ),
                                    this.speechHandler.enable();
                            }),
                            (t.sendPhrase = function (e) {
                                this.socket.emit("speak", e);
                            }),
                            (t.showDialog = function (e) {
                                $("#cover").fadeIn(), $(e).show();
                            }),
                            (t.setupConcedeHandler = function () {
                                var e = this;
                                $("#concede").on("click", function () {
                                    e.showDialog("#concede-dialog");
                                }),
                                    $("#concede-dialog button").on(
                                        "click",
                                        function () {
                                            e.hideDialog("#concede-dialog");
                                        }
                                    ),
                                    $("#concede-confirm").on(
                                        "click",
                                        function () {
                                            e.fireEvent("forcequit", {
                                                player: e.players[0],
                                                reason: "concede",
                                            }),
                                                e.sendMove({
                                                    type: "forcequit",
                                                    reason: "concede",
                                                    playerId:
                                                        e.players[0]
                                                            .multiplayerId,
                                                });
                                        }
                                    );
                            }),
                            (t.hideDialog = function (e) {
                                $("#cover").fadeOut(), $(e).hide();
                            }),
                            (t.onConnect = function () {
                                if (
                                    (this.visibilityChange(),
                                    o.debug("Socket connected!"),
                                    this.hideDialog("#reconnecting"),
                                    1 < this.receivedMoves.length)
                                ) {
                                    var e = this.receivedMoves[
                                        this.receivedMoves.length - 1
                                    ];
                                    this.socket.emit("sync-moves", e.nr);
                                }
                            }),
                            (t.reconnectStep = function () {
                                var e = this,
                                    t =
                                        10 -
                                        Math.round(
                                            (new Date().getTime() -
                                                this.disconnectTime) /
                                                1e3
                                        );
                                this.socket.connected
                                    ? (this.hideDialog("#reconnecting"),
                                      delete this.disconnectTime)
                                    : t < 0
                                    ? (this.socket.disconnect(),
                                      $("#reconnecting").hide(),
                                      $("#reconnecting-failed").show(),
                                      this.tempStorage.remove(s.qs.gid))
                                    : ($("#reconnecting p span").text(t),
                                      setTimeout(function () {
                                          return e.reconnectStep();
                                      }, 1e3));
                            }),
                            (t.onGetOut = function () {
                                this.gameFinished ||
                                    (2 !== this.players.length &&
                                        ($(".multiplayer-dialog").hide(),
                                        $("#cover").fadeIn(),
                                        $("#get-out").show(),
                                        this.socket.disconnect(),
                                        s.deleteCake("results"),
                                        s.deleteCake("round")));
                            }),
                            (t.onDisconnect = function (e) {
                                var t = this;
                                o.debug("Socket disconnected. Reason: " + e),
                                    this.speechHandler.disable(),
                                    this.gameFinished ||
                                        ("io client disconnect" !== e &&
                                            ((this.disconnectTime = new Date().getTime()),
                                            setTimeout(function () {
                                                return t.reconnectStep();
                                            }),
                                            this.showDialog("#reconnecting")));
                            }),
                            (t.onSyncMoves = function (e) {
                                var t = this.sentMoves,
                                    a = Array.isArray(t),
                                    n = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var i;
                                    if (a) {
                                        if (n >= t.length) break;
                                        i = t[n++];
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value;
                                    }
                                    var r = i;
                                    r.nr > e && this.socket.emit("move", r);
                                }
                            }),
                            (t.onPlayersReady = function (e) {
                                var t = this.players,
                                    a = Array.isArray(t),
                                    n = 0;
                                for (t = a ? t : t[Symbol.iterator](); ; ) {
                                    var i;
                                    if (a) {
                                        if (n >= t.length) break;
                                        i = t[n++];
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value;
                                    }
                                    var r = i;
                                    e.includes(r.multiplayerId) &&
                                        ((r.offline =
                                            new Date().getTime() - 2e4),
                                        $(".p-" + r.multiplayerId).addClass(
                                            "offline"
                                        ));
                                }
                                this.fireEvent("players-ready");
                            }),
                            (t.onTableNotFound = function () {
                                this.gameFinished ||
                                    this.showDialog("#table-not-found");
                            }),
                            (t.onMigrate = function (e) {
                                (this.table.hostname = e),
                                    this.socket.off("disconnect"),
                                    this.socket.disconnect(),
                                    this.connect();
                            }),
                            (t.onPlayerOnline = function (t) {
                                delete this.players.find(function (e) {
                                    return e.multiplayerId === t;
                                }).offline,
                                    o.debug("Player online: " + t),
                                    $(".p-" + t).removeClass("offline");
                            }),
                            (t.onPlayerOffline = function (t) {
                                o.debug("Player offline: " + t);
                                var e = this.players.find(function (e) {
                                    return e.multiplayerId === t;
                                });
                                e && (e.offline = new Date().getTime()),
                                    $(".p-" + t).addClass("offline");
                            }),
                            (t.onTableState = function (e) {
                                var a = this;
                                $(
                                    "#top-player .face-small, #left-player .face-small, #right-player .face-small"
                                ).addClass("offline");
                                var t = this.players.filter(function (e) {
                                        return "bottom-player" !== e.id;
                                    }),
                                    n = Array.isArray(t),
                                    i = 0;
                                for (t = n ? t : t[Symbol.iterator](); ; ) {
                                    var r;
                                    if (n) {
                                        if (i >= t.length) break;
                                        r = t[i++];
                                    } else {
                                        if ((i = t.next()).done) break;
                                        r = i.value;
                                    }
                                    r.offline = new Date().getTime();
                                }
                                var s = function () {
                                        if (l) {
                                            if (d >= o.length) return "break";
                                            c = o[d++];
                                        } else {
                                            if ((d = o.next()).done)
                                                return "break";
                                            c = d.value;
                                        }
                                        var t = c;
                                        $(".p-" + t).removeClass("offline"),
                                            delete a.players.find(function (e) {
                                                return e.multiplayerId === t;
                                            }).offline;
                                    },
                                    o = e.onlinePlayers,
                                    l = Array.isArray(o),
                                    d = 0;
                                for (o = l ? o : o[Symbol.iterator](); ; ) {
                                    var c;
                                    if ("break" === s()) break;
                                }
                            }),
                            (t.onMove = function (t) {
                                if (!this.gameFinished) {
                                    try {
                                        if (
                                            localStorage.dropmoves &&
                                            Math.random() <= 0.2
                                        )
                                            return void o.debug(
                                                "Dropping move " + t.nr
                                            );
                                    } catch (e) {}
                                    var e = this.receivedMoves[
                                        this.receivedMoves.length - 1
                                    ];
                                    if (t.nr <= e.nr)
                                        t.resend
                                            ? o.debug(
                                                  "Got resent move " +
                                                      t.nr +
                                                      " that I didn't need"
                                              )
                                            : s.trackEvent(
                                                  "OldMove",
                                                  "Got move " +
                                                      t.nr +
                                                      ", last move nr was " +
                                                      e.nr
                                              );
                                    else {
                                        if (t.nr > e.nr + 1)
                                            return (
                                                s.trackEvent(
                                                    "FutureMove",
                                                    "Got move " +
                                                        t.nr +
                                                        ", last move nr was " +
                                                        e.nr
                                                ),
                                                void this.socket.emit(
                                                    "sync-moves",
                                                    e.nr
                                                )
                                            );
                                        this.receivedMoves.push(t);
                                        var a = this.players.find(function (e) {
                                            return (
                                                e.multiplayerId === t.playerId
                                            );
                                        });
                                        if (a) {
                                            var n =
                                                    a.multiplayerId ===
                                                        s.siteSettings
                                                            .multiplayerPublicId &&
                                                    !t.substitute,
                                                i =
                                                    t.substitutePlayerId ===
                                                    s.siteSettings
                                                        .multiplayerPublicId;
                                            n
                                                ? o.debug(
                                                      "Not putting our own move in the queue"
                                                  )
                                                : i
                                                ? o.debug(
                                                      "Not putting our own subsitute move in the queue"
                                                  )
                                                : "forcequit" === t.type
                                                ? this.fireEvent("forcequit", {
                                                      player: a,
                                                      reason: t.reason,
                                                  })
                                                : a.multiplayerMoves.push(t);
                                        } else
                                            s.trackEvent(
                                                "MoveWithoutPlayer",
                                                "Move.playerId" +
                                                    t.playerId +
                                                    ", player ids: " +
                                                    this.players
                                                        .map(function (e) {
                                                            return e.multiplayerId;
                                                        })
                                                        .join(","),
                                                0,
                                                "",
                                                "",
                                                1
                                            );
                                    }
                                }
                            }),
                            (t.onSpeak = function (e) {
                                this.speechHandler.receivePhrase(
                                    e.phraseId,
                                    e.playerId
                                );
                            }),
                            (t.onNextTable = function (e) {
                                o.debug("Got the table for round " + e.round),
                                    n(e, this.publicId),
                                    this.tempStorage.set(e.id, e),
                                    this.fireEvent("next-table", e);
                            }),
                            (t.sendMove = function (e) {
                                (e.nr =
                                    this.sentMoves[this.sentMoves.length - 1]
                                        .nr + 1),
                                    this.sentMoves.push(e);
                                try {
                                    if (
                                        localStorage.dropmoves &&
                                        Math.random() <= 0.2
                                    )
                                        return void o.debug(
                                            "Dropping move " + e.nr
                                        );
                                } catch (e) {}
                                this.socket.emit("move", e);
                            }),
                            (t.sendResult = function (e, t) {
                                void 0 === t && (t = !0);
                                if (
                                    (o.debug(
                                        "Sending result: " + JSON.stringify(e)
                                    ),
                                    this.socket.emit("result", e),
                                    (this.gameFinished = !0),
                                    e.finished)
                                ) {
                                    this.tempStorage.remove(s.qs.gid);
                                    try {
                                        window.history.pushState(
                                            "",
                                            document.title,
                                            location.pathname
                                        );
                                    } catch (e) {}
                                } else if (t) {
                                    $("#start-new-game").text(
                                        "Start next round"
                                    );
                                    var a = new Date().getTime(),
                                        n = setInterval(function () {
                                            var e = new Date().getTime() - a,
                                                t = Math.round((2e4 - e) / 1e3);
                                            $(
                                                "#multiplayer-refresh-countdown span"
                                            ).text(t),
                                                t <= 10 &&
                                                    $(
                                                        "#multiplayer-refresh-countdown"
                                                    ).show(),
                                                t <= 0 &&
                                                    (clearInterval(n),
                                                    s.ads.trigger(
                                                        s.reloadPage
                                                    ));
                                        }, 1e3);
                                    $(".multiplayer-start-next-round").on(
                                        "click",
                                        function () {
                                            clearInterval(n);
                                        }
                                    );
                                }
                            }),
                            e
                        );
                    })();
                t.exports = l;
            },
            {
                "../helper-functions": 8,
                "../temp-storage": 18,
                "../util": 19,
                "./multiplayer-util": 12,
                "./speech-handler": 15,
            },
        ],
        11: [
            function (e, t, a) {
                "use strict";
                var C = e("../util"),
                    n = e("./multiplayer-util"),
                    i = n.normalizeTable,
                    r = n.randomId,
                    s = n.setupMultiplayerLogging,
                    k = e("../helper-functions").captainsLog,
                    o = e("../temp-storage"),
                    l = e("./name-handler"),
                    d = e("../statistics");
                $.fn.setDisabled = function (e) {
                    return e
                        ? this.attr("disabled", "disabled")
                        : this.removeAttr("disabled");
                };
                var c = (function () {
                    function e(e, t) {
                        (this.slug = e),
                            (this.playerCount = t),
                            (this.tempStorage = new o(e)),
                            s(),
                            C.siteSettings.multiplayerPublicId ||
                                (C.siteSettings.set("multiplayerPublicId", r()),
                                C.siteSettings.set(
                                    "multiplayerPrivateId",
                                    r()
                                )),
                            (this.publicId =
                                C.siteSettings.multiplayerPublicId),
                            (this.privateId =
                                C.siteSettings.multiplayerPrivateId),
                            this.setupEventHandlers(),
                            this.setupMultiplayerButton(),
                            l(function () {
                                return $(".multiplayer-lobby-link").click();
                            }),
                            this.hasJoinedTable() && this.connect();
                    }
                    var t = e.prototype;
                    return (
                        (t.message = function (e) {
                            $("#lobby-message span").text(e);
                        }),
                        (t.setupMultiplayerButton = function () {
                            var a = this;
                            $(".multiplayer-lobby-link").on(
                                "touchstart click",
                                function (e) {
                                    e.preventDefault(), C.mobileMenu.close();
                                    try {
                                        window.sessionStorage.getItem(
                                            "nothing"
                                        );
                                    } catch (e) {
                                        return (
                                            $("#cover").fadeIn(),
                                            $("#no-cookies").show(),
                                            void $("#no-cookies button").on(
                                                "click",
                                                function (e) {
                                                    $("#cover").fadeOut(),
                                                        $("#no-cookies").hide();
                                                }
                                            )
                                        );
                                    }
                                    if (
                                        !C.siteSettings.playerName ||
                                        "You" === C.siteSettings.playerName
                                    )
                                        return (
                                            $("#cover").fadeIn(),
                                            $("#enter-name").show(),
                                            void $("#name-new").focus()
                                        );
                                    $("#cover").fadeIn(),
                                        $("#multiplayer-lobby").show();
                                    var t =
                                        $("#private").position().top -
                                        ($("#lobby-message").position().top +
                                            $("#lobby-message").height()) -
                                        10;
                                    $("#multiplayer-lobby-tables").height(
                                        Math.floor(t)
                                    ),
                                        a.connect();
                                }
                            ),
                                $("#multiplayer-lobby-close").on(
                                    "click",
                                    function (e) {
                                        $("#cover").fadeOut(),
                                            $("#multiplayer-lobby").hide(),
                                            a.hasJoinedTable() ||
                                                a.disconnect();
                                    }
                                ),
                                C.qs.join && $("#multiplayer-button").click();
                        }),
                        (t.validateJoinTableCode = function () {
                            $("#join-table-code")
                                .val()
                                .match(/^\d\d\d\d\d\d$/)
                                ? $("#join-table-ok").setDisabled(!1)
                                : $("#join-table-ok").setDisabled(!0);
                        }),
                        (t.setupEventHandlers = function () {
                            function e(e, t) {
                                return $(e).on("click", t.bind(a));
                            }
                            var a = this;
                            e("#leave-table", this.leaveTable),
                                e(
                                    "#create-private-table",
                                    this.createPrivateTable
                                ),
                                e(
                                    "#join-private-table",
                                    this.openJoinTableDialog
                                ),
                                e("#join-table-ok", this.joinPrivateTable),
                                $("#multiplayer-lobby-close").on(
                                    "click",
                                    function () {
                                        return $("#multiplayer-lobby").hide();
                                    }
                                ),
                                $("#error-message-box button").on(
                                    "click",
                                    function () {
                                        return $("#error-message-box").hide();
                                    }
                                ),
                                $("#join-table-code").on("input", function () {
                                    return a.validateJoinTableCode();
                                }),
                                $("#join-table-cancel").on(
                                    "click",
                                    function () {
                                        $("#join-table-code").val(""),
                                            $(
                                                "#join-private-table-dialog"
                                            ).hide();
                                    }
                                ),
                                $("#multiplayer-lobby-tables").on(
                                    "click",
                                    ".multiplayer-table",
                                    function (e) {
                                        return a.joinTable(e.currentTarget.id);
                                    }
                                );
                        }),
                        (t.setupMessageHandlers = function () {
                            function e(e, t) {
                                return a.socket.on(e, t.bind(a));
                            }
                            var a = this;
                            e("connect", this.onConnect),
                                e("disconnect", this.onDisconnect),
                                e("connect_error", this.onConnectError),
                                e("reconnection", this.onReconnect),
                                e(
                                    "private-table-created",
                                    this.onPrivateTableCreated
                                ),
                                e("table-joined", this.onTableJoined),
                                e("table-left", this.onTableLeft),
                                e("table-changed", this.onTableChanged),
                                e("table-list", this.onTableList),
                                e(
                                    "table-already-joined",
                                    this.onTableAlreadyJoined
                                ),
                                e("table-full", this.onTableFull),
                                e("table-not-found", this.onTableNotFound),
                                e("table-remove", this.onTableRemove),
                                e("start-game", this.onStartGame),
                                e("start-countdown", this.onStartCountdown),
                                e("update-app", this.onUpdateApp),
                                $(".lobby-dialog input").on("focus", function (
                                    e
                                ) {
                                    setTimeout(function () {
                                        return $(e.target).select();
                                    }, 0);
                                }),
                                $("#private-table-created button").on(
                                    "click",
                                    function () {
                                        return $(
                                            "#private-table-created"
                                        ).hide();
                                    }
                                );
                        }),
                        (t.createConnectionUrl = function () {
                            var e,
                                t = this.slug;
                            (e =
                                "cardgames.io" === location.hostname ||
                                "production" === C.qs.server ||
                                APP_MODE
                                    ? "https://" + t + ".cardgames.io/"
                                    : "https://dev.cardgames.io:3031/"),
                                (e += "lobby");
                            var a = {
                                    face: C.siteSettings.players.bottom.code,
                                    name: C.siteSettings.playerName,
                                    publicId: this.publicId,
                                    privateId: this.privateId,
                                    clientversion: siteVersion,
                                    game: t,
                                    type: "jointable",
                                    minPlayers: this.playerCount.minPlayers,
                                    maxPlayers: this.playerCount.maxPlayers,
                                },
                                n = "?";
                            for (var i in a)
                                (e += "" + n + i + "=" + a[i]), (n = "&");
                            return e;
                        }),
                        (t.hasJoinedTable = function () {
                            return this.tempStorage.get("joinedtable", !1);
                        }),
                        (t.onTableList = function (e) {
                            var t = this;
                            k.debug(
                                "Got list of tables: \n" + JSON.stringify(e)
                            ),
                                $("#multiplayer-lobby-tables").html("");
                            var a = e.find(function (e) {
                                return e.players.some(function (e) {
                                    return e.id === t.publicId;
                                });
                            });
                            a &&
                                (k.debug(
                                    "We have joined one of these tables: " +
                                        a.id
                                ),
                                (this.tableId = a.id)),
                                this.setJoinedState(!!a);
                            var n = e,
                                i = Array.isArray(n),
                                r = 0;
                            for (n = i ? n : n[Symbol.iterator](); ; ) {
                                var s;
                                if (i) {
                                    if (r >= n.length) break;
                                    s = n[r++];
                                } else {
                                    if ((r = n.next()).done) break;
                                    s = r.value;
                                }
                                var o = s;
                                this.onTableChanged(o),
                                    o.isPrivate &&
                                        $("#" + o.id).addClass("private-table");
                            }
                            C.qs.join &&
                                (this.openJoinTableDialog(),
                                $("#join-table-code").val(C.qs.join),
                                this.validateJoinTableCode(),
                                (C.qs.join = !1));
                        }),
                        (t.onTableRemove = function (e) {
                            $("#" + e).remove();
                        }),
                        (t.onTableAlreadyJoined = function () {
                            this.message(
                                "You have already joined that table, you can't join it again."
                            );
                        }),
                        (t.onTableNotFound = function () {
                            delete this.tableId,
                                this.setJoinedState(!1),
                                this.message(
                                    "Whoops, we can't find that table on our servers. Try joining another table!"
                                ),
                                $("#join-text")
                                    .addClass("error")
                                    .text("Table doesn't exist!"),
                                $("#join-table-ok").setDisabled(!1),
                                $("#join-table-cancel").setDisabled(!1),
                                $("#join-table-code").setDisabled(!1);
                        }),
                        (t.onStartCountdown = function (e) {
                            var t = this;
                            this.message(
                                "The game will start in " + e + " seconds..."
                            ),
                                (this.targetStart = {
                                    time: new Date().getTime() + 1e3 * e,
                                }),
                                (this.targetStart.intervalId = setInterval(
                                    function () {
                                        var e = Math.ceil(
                                            (t.targetStart.time -
                                                new Date().getTime()) /
                                                1e3
                                        );
                                        0 <= e
                                            ? t.message(
                                                  "The game will start in " +
                                                      e +
                                                      " seconds..."
                                              )
                                            : t.message(
                                                  "The game is about to start..."
                                              );
                                    }
                                ));
                        }),
                        (t.onStartGame = function (e) {
                            this.tempStorage.remove("joinedtable"),
                                i(e, this.publicId),
                                d.cancelGame(),
                                this.tempStorage.set(e.id, e),
                                (location.href =
                                    "/" + this.slug + "/?gid=" + e.id);
                        }),
                        (t.onTableFull = function () {
                            delete this.tableId,
                                this.setJoinedState(!1),
                                this.message(
                                    "Sorry, that table just became full, try joining another table!"
                                );
                        }),
                        (t.showMessageBox = function (e, t) {
                            $("#error-message-box h3").text(e),
                                $("#error-message-box p").text(t),
                                $("#error-message-box").show();
                        }),
                        (t.createPrivateTable = function (e) {
                            e.preventDefault(),
                                this.tableId
                                    ? this.showMessageBox(
                                          "Can't create table",
                                          "You have already joined a table. You must first leave that table if you want to create a new private table."
                                      )
                                    : this.socket.emit(
                                          "create-private-table",
                                          this.playerCount
                                      );
                        }),
                        (t.openJoinTableDialog = function (e) {
                            e && e.preventDefault(),
                                $("#private-table-created").hide(),
                                this.tableId
                                    ? this.showMessageBox(
                                          "Can't join private table",
                                          "You have already joined a table. You must first leave that table if you want to join another private table."
                                      )
                                    : ($("#join-table-ok").setDisabled(!0),
                                      $("#join-table-cancel").setDisabled(!1),
                                      $("#join-table-code").setDisabled(!1),
                                      $("#join-text")
                                          .text(
                                              "Please enter the code for the table:"
                                          )
                                          .removeClass("error"),
                                      $("#join-private-table-dialog").show(),
                                      e && $("#join-table-code").focus());
                        }),
                        (t.joinPrivateTable = function () {
                            $("#join-table-ok").setDisabled(!0),
                                $("#join-table-cancel").setDisabled(!0),
                                $("#join-table-code").setDisabled(!0),
                                $("#join-text").text(
                                    "Attempting to join table..."
                                ),
                                this.socket.emit(
                                    "join-table",
                                    parseInt($("#join-table-code").val())
                                );
                        }),
                        (t.leaveTable = function () {
                            this.socket.emit("leave-table", this.tableId);
                        }),
                        (t.onPrivateTableCreated = function (e) {
                            k.debug("Table was created: " + JSON.stringify(e)),
                                this.setJoinedState(!0),
                                $("#table-code").val(e.code);
                            var t = "https://" + location.hostname;
                            location.port &&
                                "80" != location.port &&
                                (t += ":" + location.port),
                                $("#table-code-link").val(
                                    t + "/" + this.slug + "/?join=" + e.code
                                ),
                                (this.tableId = e.id),
                                this.onTableChanged(e),
                                $("#private-table-created").show();
                        }),
                        (t.createPlayerDiv = function (e) {
                            return $("<div/>")
                                .attr("id", e.id)
                                .addClass("table-player")
                                .addClass(e.cssClass)
                                .css(
                                    "background-image",
                                    "url(" + C.getFaceUrl(e.face)
                                )
                                .append($("<label/>").text(e.name));
                        }),
                        (t.joinTable = function (e) {
                            this.tableId ||
                                ((this.tableId = e),
                                this.setJoinedState(!0),
                                this.socket.emit("join-table", e));
                        }),
                        (t.setJoinedState = function (e) {
                            $("#create-private-table").setDisabled(e),
                                $("#join-private-table").setDisabled(e),
                                e
                                    ? (this.playerCount.minPlayers ===
                                      this.playerCount.maxPlayers
                                          ? this.message(
                                                "The game will start when your table is full."
                                            )
                                          : this.message(
                                                "The game will start when at least " +
                                                    this.playerCount
                                                        .minPlayers +
                                                    " have joined."
                                            ),
                                      $("body").addClass("joined"),
                                      $("#" + this.tableId).addClass(
                                          "my-table"
                                      ),
                                      this.tempStorage.set("joinedtable", !0))
                                    : (this.message(
                                          "Click a table to join a game."
                                      ),
                                      $(".my-table").removeClass("my-table"),
                                      $("body").removeClass("joined"),
                                      this.tempStorage.set("joinedtable", !1));
                        }),
                        (t.onTableJoined = function (e) {
                            (this.tableId = e),
                                this.setJoinedState(!0),
                                $("#join-private-table-dialog").hide();
                        }),
                        (t.onTableLeft = function () {
                            delete this.tableId,
                                this.message(
                                    "You have left the table. Click a table to join a game."
                                ),
                                this.targetStart &&
                                    (clearInterval(this.targetStart.intervalId),
                                    delete this.targetStart),
                                this.setJoinedState(!1);
                        }),
                        (t.onTableChanged = function (n) {
                            var t = this,
                                e = n.players.find(function (e) {
                                    return e.id === t.publicId;
                                });
                            if (e) {
                                var a = n.players.indexOf(e);
                                if (
                                    (this.targetStart &&
                                        n.players.length <
                                            this.playerCount.minPlayers &&
                                        (clearInterval(
                                            this.targetStart.intervalId
                                        ),
                                        delete this.targetStart,
                                        this.message(
                                            "The game will start when at least " +
                                                this.playerCount.minPlayers +
                                                " have joined."
                                        )),
                                    (e.cssClass = "bottom"),
                                    (e.name = C.siteSettings.playerName),
                                    4 === this.playerCount.minPlayers)
                                ) {
                                    for (
                                        var i = ["left", "top", "right"],
                                            r = a + 1;
                                        r < a + 4;
                                        r++
                                    )
                                        n.players[r] &&
                                            (n.players[r].cssClass = i.shift());
                                    i = ["left", "top", "right"];
                                    for (var s = a - 1; 0 <= s; s--)
                                        n.players[s] &&
                                            (n.players[s].cssClass = i.pop());
                                } else if (
                                    2 === this.playerCount.minPlayers &&
                                    4 === this.playerCount.maxPlayers
                                ) {
                                    var o = n.players;
                                    if (2 === o.length)
                                        o[(a + 1) % 2].cssClass = "top";
                                    else if (2 < o.length)
                                        for (
                                            var l = ["left", "top", "right"],
                                                d = 0;
                                            d < o.length - 1;
                                            d++
                                        )
                                            o[(a + d + 1) % o.length].cssClass =
                                                l[d];
                                }
                            } else if (4 === this.playerCount.minPlayers)
                                for (
                                    var c = ["bottom", "left", "top", "right"],
                                        u = n.players.length - 1;
                                    0 <= u;
                                    u--
                                )
                                    n.players[u].cssClass = c.pop();
                            else if (
                                2 === this.playerCount.minPlayers &&
                                4 === this.playerCount.maxPlayers
                            ) {
                                var h = n.players;
                                if (1 === h.length) h[0].cssClass = "top";
                                else if (2 <= h.length)
                                    for (
                                        var p = [
                                                "left",
                                                "top",
                                                "right",
                                                "bottom",
                                            ],
                                            m = 0;
                                        m < h.length;
                                        m++
                                    )
                                        h[m].cssClass = p[m];
                            }
                            var f = $("#" + n.id);
                            0 === f.length &&
                                ((f = $("<div/>", {
                                    id: n.id,
                                    class: "multiplayer-table",
                                }).appendTo("#multiplayer-lobby-tables")),
                                n.isPrivate &&
                                    (f.append(
                                        $("<div/>")
                                            .addClass("code")
                                            .text(n.code)
                                    ),
                                    f.addClass("private-table"))),
                                n.id === this.tableId && f.addClass("my-table"),
                                f.find("div").each(function () {
                                    var t = $(this).attr("id"),
                                        e = n.players.find(function (e) {
                                            return e.id === t;
                                        }),
                                        a = $("#" + t);
                                    e
                                        ? a.hasClass(e.cssClass) ||
                                          a
                                              .removeClass(
                                                  "top left right bottom"
                                              )
                                              .addClass(e.cssClass)
                                        : a.remove();
                                });
                            var g = n.players,
                                y = Array.isArray(g),
                                v = 0;
                            for (g = y ? g : g[Symbol.iterator](); ; ) {
                                var b;
                                if (y) {
                                    if (v >= g.length) break;
                                    b = g[v++];
                                } else {
                                    if ((v = g.next()).done) break;
                                    b = v.value;
                                }
                                var w = b;
                                if (0 === $("#" + w.id).length)
                                    this.createPlayerDiv(w).appendTo(f);
                            }
                            k.debug("Table changed: " + n.id);
                        }),
                        (t.connect = function () {
                            if (C.qs.gid)
                                return (
                                    this.message(
                                        "You are already playing a multiplayer game, you can't start another one right now"
                                    ),
                                    void $("#private").hide()
                                );
                            if (!this.socket) {
                                var e = this.createConnectionUrl();
                                k.debug("Connection url: " + e),
                                    (this.socket = io(e, {
                                        reconnection: !0,
                                        reconnectAttempts: 10,
                                    })),
                                    this.setupMessageHandlers();
                            }
                            this.socket.connected || this.socket.connect();
                        }),
                        (t.onUpdateApp = function () {
                            this.disconnect(),
                                this.message(
                                    "Hi. It looks like you're using an old version of our app. Please update to the latest version to continue playing our multiplayer games 😎."
                                ),
                                $("#private").hide(),
                                this.tempStorage.remove("connectlobby"),
                                (this.lobbyWindowOpen = !1);
                        }),
                        (t.disconnect = function () {
                            this.socket &&
                                this.socket.connected &&
                                this.socket.disconnect();
                        }),
                        (t.onDisconnect = function (e) {
                            k.debug("Socket disconnected: " + e);
                        }),
                        (t.onConnect = function () {
                            k.debug("Socket connected");
                        }),
                        (t.onReconnect = function (e) {
                            k.debug("Reconnected: " + e);
                        }),
                        (t.onConnectError = function (e) {
                            $("#multiplayer-lobby-tables").html(
                                $("<div/>")
                                    .attr("id", "connection-error")
                                    .text("CONNECTION ERROR 😟")
                                    .append(
                                        $("<div/>").text(
                                            "Trying to reconnect..."
                                        )
                                    )
                            ),
                                k.error("Connection error: " + e),
                                this.setJoinedState(!1);
                        }),
                        e
                    );
                })();
                t.exports = c;
            },
            {
                "../helper-functions": 8,
                "../statistics": 17,
                "../temp-storage": 18,
                "../util": 19,
                "./multiplayer-util": 12,
                "./name-handler": 13,
            },
        ],
        12: [
            function (e, t, a) {
                "use strict";
                var c = e("../util"),
                    n = e("../helper-functions").captainsLog;
                var i = (function () {
                    function e(e) {
                        this.showMessage = e;
                    }
                    var t = e.prototype;
                    return (
                        (t.start = function (a, n, i) {
                            var r = this;
                            (this.waitStart = new Date().getTime()),
                                (i =
                                    i ||
                                    "Can't leave the other players waiting too long! We will play a random card for you in $REMAINING$ seconds..."),
                                this.stop(),
                                (this.timeoutId = setInterval(function () {
                                    var e = Math.round(
                                            (new Date().getTime() -
                                                r.waitStart) /
                                                1e3
                                        ),
                                        t = a - e;
                                    t <= 10 &&
                                        (r.showMessage(
                                            i.replace(
                                                "$REMAINING$",
                                                Math.max(0, t)
                                            )
                                        ),
                                        t <= -1 && (n(), r.stop()));
                                }, 1e3));
                        }),
                        (t.stop = function () {
                            this.timeoutId &&
                                (clearInterval(this.timeoutId),
                                delete this.timeoutId);
                        }),
                        e
                    );
                })();
                t.exports = {
                    normalizeTable: function (e, t) {
                        for (var a = 0; e.players[0].id !== t; ) {
                            var n = e.players.pop();
                            if ((e.players.unshift(n), 5 < ++a))
                                throw new Error(
                                    "Human player with id " + t + " not found!"
                                );
                        }
                        e.players[0].pos = "bottom";
                        var i = e.players.length;
                        2 === i
                            ? (e.players[1].pos = "top")
                            : 3 === i
                            ? ((e.players[1].pos = "left"),
                              (e.players[2].pos = "top"))
                            : 4 === i &&
                              ((e.players[1].pos = "left"),
                              (e.players[2].pos = "top"),
                              (e.players[3].pos = "right")),
                            (e.facedata = {});
                        var r = e.players,
                            s = Array.isArray(r),
                            o = 0;
                        for (r = s ? r : r[Symbol.iterator](); ; ) {
                            var l;
                            if (s) {
                                if (o >= r.length) break;
                                l = r[o++];
                            } else {
                                if ((o = r.next()).done) break;
                                l = o.value;
                            }
                            var d = l;
                            e.facedata[d.pos] = {
                                name: d.name,
                                face: c.getFaceUrl(d.face),
                                faceSad: c.getFaceUrl(d.face, !0),
                                code: d.face,
                                type: "custom",
                            };
                        }
                    },
                    AutoPlayTimer: i,
                    randomId: function () {
                        var e = "abcdefghijklmnopqrstuvwxyz";
                        e += e.toUpperCase();
                        for (var t = "", a = 0; a < 14; a++)
                            t += e.charAt(Math.floor(Math.random() * e.length));
                        return t + new Date().getMilliseconds();
                    },
                    setupMultiplayerLogging: function () {
                        if (
                            "dev.cardgames.io" === location.hostname ||
                            c.qs.debug ||
                            1 == c.qs.debug
                        ) {
                            try {
                                localStorage.debug = "socket.io-client:socket";
                            } catch (e) {}
                            n.level = "debug";
                        }
                    },
                };
            },
            {
                "../helper-functions": 8,
                "../util": 19,
            },
        ],
        13: [
            function (e, t, a) {
                "use strict";
                var s = e("../util"),
                    o = e("./names");
                t.exports = function (t, n) {
                    function i(e) {
                        return e.replace(/^\s*|\s*$/g, "");
                    }
                    function e(a, n) {
                        $(a).on("input", function (e) {
                            var t = i($(a).val());
                            o.validateName(t).isValid
                                ? $(n).removeAttr("disabled")
                                : $(n).attr("disabled", "disabled");
                        });
                    }
                    function r(e) {
                        s.siteSettings.set("playerName", e);
                        var t = s.siteSettings.players;
                        (t.bottom.name = e),
                            s.siteSettings.set("players", t),
                            $(".bottom-player-name").text(e);
                    }
                    e("#name-new", "#confirm-name-new"),
                        e("#name-change", "#confirm-name-change"),
                        $("#confirm-name-new").on("click", function (e) {
                            $("#enter-name").hide(),
                                r(i($("#name-new").val())),
                                t();
                        }),
                        $("#confirm-name-change").on("click", function (e) {
                            $("#challenge-yourself").hide(),
                                $("#multiplayer-challenge-lobby").show();
                            var t = s.siteSettings.playerName,
                                a = i($("#name-change").val());
                            r(a),
                                n({
                                    oldName: t,
                                    newName: a,
                                });
                        }),
                        $("#cancel-name-new").on("click", function (e) {
                            $("#cover").fadeOut(), $("#enter-name").hide();
                        });
                };
            },
            {
                "../util": 19,
                "./names": 14,
            },
        ],
        14: [
            function (e, t, a) {
                "use strict";
                a.validateName = function (e) {
                    for (
                        var t = new RegExp("[a-zA-Z-À-ÿ-'\\s]"),
                            a = new RegExp(
                                "^([a-zA-Z-À-ÿ-']+\\s?[a-zA-Z-À-ÿ-']+$)"
                            ),
                            n = 0;
                        n < e.length;
                        n++
                    )
                        if (!t.test(e[n]))
                            return {
                                isValid: !1,
                                reason: " contains invalid characters",
                            };
                    return 12 < e.length
                        ? {
                              isValid: !1,
                              reason: "'s too long",
                          }
                        : e.length < 2
                        ? {
                              isValid: !1,
                              reason: "'s too short",
                          }
                        : a.test(e)
                        ? e.toLowerCase().includes("fuck")
                            ? {
                                  isValid: !1,
                                  reason: " contains a bad word",
                              }
                            : {
                                  isValid: !0,
                                  reason: "",
                              }
                        : {
                              isValid: !1,
                              reason: " contains too many spaces",
                          };
                };
            },
            {},
        ],
        15: [
            function (e, t, a) {
                "use strict";
                var s = e("../util"),
                    n = (function () {
                        function e(e) {
                            var t = this;
                            (this.send = e),
                                $("#speak").on("click", function (e) {
                                    return t.show(e);
                                }),
                                $(".speak-bubble, .emoji-speak").on(
                                    "click touchstart",
                                    function (e) {
                                        return t.speak(e);
                                    }
                                ),
                                $("#cancel-speak").on("click", function (e) {
                                    return t.hide(e);
                                });
                        }
                        var t = e.prototype;
                        return (
                            (t.speak = function (e) {
                                e.preventDefault(),
                                    $("#phrases").fadeOut(),
                                    this.showBubble(
                                        e.target.id,
                                        s.siteSettings.multiplayerPublicId
                                    ),
                                    this.send(e.target.id);
                            }),
                            (t.showBubble = function (e, t) {
                                var a,
                                    n,
                                    i = $(".p-" + t)
                                        .parent()
                                        .find(".bubble"),
                                    r = $(".p-" + t);
                                (n = e.includes("emoji-")
                                    ? ((a = $("#emoji-list #" + e).text()),
                                      "multiplayer-bubble-emoji")
                                    : ((a = $("#phrases-list #" + e).text()),
                                      "multiplayer-bubble-text")),
                                    a
                                        ? (i.show(),
                                          a.includes(":(") && r.addClass("sad"),
                                          i
                                              .find("p span")
                                              .html(
                                                  $("<span/>")
                                                      .addClass(n)
                                                      .text(a)
                                              ),
                                          i.find("div").hide(),
                                          i.find("img").hide(),
                                          setTimeout(function () {
                                              i.fadeOut(), r.removeClass("sad");
                                          }, 3500))
                                        : s.trackEvent("BadPhrase", e);
                            }),
                            (t.receivePhrase = function (e, t) {
                                this.showBubble(e, t);
                            }),
                            (t.show = function () {
                                $("#phrases").show();
                            }),
                            (t.hide = function () {
                                $("#phrases").hide();
                            }),
                            (t.disable = function () {
                                $("#speak").attr("disabled", "disabled");
                            }),
                            (t.enable = function () {
                                $("#speak").removeAttr("disabled");
                            }),
                            e
                        );
                    })();
                t.exports = n;
            },
            {
                "../util": 19,
            },
        ],
        16: [
            function (e, t, a) {
                "use strict";
                t.exports = {
                    slug: slug,
                    category: category,
                    siteVersion: siteVersion,
                    showAds: showAds,
                    afgChannelId: afgChannelId,
                    defaultSettings: defaultSettings,
                    defaultSiteSettings: defaultSiteSettings,
                    themes: themes,
                    players: players,
                };
            },
            {},
        ],
        17: [
            function (e, t, a) {
                "use strict";
                var n,
                    i = e("./util"),
                    r = i.logError,
                    s = i.qs,
                    o = e("../shared/helper-functions").captainsLog,
                    u = !!s.gid;
                try {
                    n = window.localStorage;
                } catch (e) {
                    n = null;
                }
                var h = null,
                    p = null;
                var l = (window.slug || "unknown") + ".stats";
                function d() {
                    var e = n.getItem(l);
                    if (e) {
                        var t = JSON.parse(e);
                        if (t && t.players && t.startTime) return t;
                        n.removeItem(l);
                        try {
                            r(
                                "Stats for " +
                                    l +
                                    " was malformed, removed it. First 50 chars of the data were: " +
                                    (e + "").substr(0, 50)
                            );
                        } catch (e) {}
                    }
                    var a = {
                        version: 4,
                        startTime: new Date().getTime(),
                        gameCount: 0,
                        abandonedGameCount: 0,
                        finishedGameCount: 0,
                        playersInGameCount: {},
                        totalGameTime: 0,
                        averageGameTime: null,
                        maxGameTime: null,
                        minGameTime: null,
                        players: {},
                    };
                    return c(a), a;
                }
                function c(e) {
                    try {
                        n.setItem(l, JSON.stringify(e));
                    } catch (e) {
                        o.error("localStorage is full");
                    }
                }
                function m(e) {
                    var t = d();
                    e(t), c(t);
                }
                function f(e) {
                    var t = {
                        gameCount: 0,
                        abandonedGameCount: 0,
                        finishedGameCount: 0,
                        winCount: 0,
                        loseCount: 0,
                        drawCount: 0,
                        winPercentage: 0,
                        totalGameTime: 0,
                    };
                    return (
                        (e = e || {
                            score: !0,
                            tournaments: !0,
                            streaks: !0,
                            wonGameTime: !0,
                        }).wonGameTime &&
                            ((t.minWonGameTime = null),
                            (t.maxWonGameTime = null),
                            (t.avgWonGameTime = null),
                            (t.totalWonGameTime = 0)),
                        e.score &&
                            ((t.totalScore = 0),
                            (t.maxScore = null),
                            (t.minScore = null),
                            (t.avgScore = null)),
                        e.streaks &&
                            ((t.winningStreak = 0),
                            (t.losingStreak = 0),
                            (t.maxWinningStreak = 0),
                            (t.maxLosingStreak = 0)),
                        e.tournaments &&
                            ((t.finishedTournamentCount = 0),
                            (t.winTournamentCount = 0),
                            (t.loseTournamentCount = 0),
                            (t.totalTournamentScore = 0),
                            (t.avgTournamentScore = 0),
                            (t.tournamentWinPercentage = 0),
                            (t.tournamentWinningStreak = 0),
                            (t.tournamentLosingStreak = 0),
                            (t.tournamentMaxWinningStreak = 0),
                            (t.tournamentMaxLosingStreak = 0)),
                        t
                    );
                }
                var g = {
                    get: d,
                    enabled: !0,
                    multiplayer: !1,
                    clear: function () {
                        this.enabled && n.removeItem(l);
                    },
                    emptyPlayer: f,
                    minimumVersion: function (e) {
                        if (this.enabled) {
                            var t = this.get();
                            t && t.version < e && this.clear();
                        }
                    },
                    startGame: function (r, s) {
                        this.enabled &&
                            ((this.options = s || {
                                tournaments: !0,
                                streaks: !0,
                                score: !0,
                                wonGameTime: !0,
                            }),
                            (this.currentPlayers = r),
                            (h = new Date().getTime()),
                            (p = null),
                            m(function (e) {
                                (e.playersInGameCount[r.length] =
                                    (e.playersInGameCount[r.length] || 0) + 1),
                                    e.gameCount++,
                                    e.abandonedGameCount++;
                                for (var t = 0; t < r.length; t++) {
                                    var a = r[t];
                                    if (!a.id)
                                        throw new Error(
                                            "Missing id on player in statistics!"
                                        );
                                    var n = a.id;
                                    if (u) {
                                        if ("bottom-player" !== n) continue;
                                        n = "multi-player";
                                    }
                                    e.players[n] || (e.players[n] = f(s));
                                    var i = e.players[n];
                                    i.gameCount++, i.abandonedGameCount++;
                                }
                            }));
                    },
                    cancelGame: function () {
                        if (this.enabled && this.currentPlayers) {
                            var i = this.currentPlayers;
                            p = h = null;
                            var r = this.options;
                            m(function (e) {
                                (e.playersInGameCount[i.length] =
                                    (e.playersInGameCount[i.length] || 0) - 1),
                                    e.gameCount--,
                                    e.abandonedGameCount--;
                                for (var t = 0; t < i.length; t++) {
                                    var a = i[t];
                                    if ("multi-player" !== a.id) {
                                        e.players[a.id] ||
                                            (e.players[a.id] = f(r));
                                        var n = e.players[a.id];
                                        n.gameCount--, n.abandonedGameCount--;
                                    }
                                }
                            });
                        }
                    },
                    finishGame: function (o, l, e) {
                        if (this.enabled) {
                            var d = [],
                                c = this.options;
                            if (
                                (m(function (e) {
                                    l ||
                                        ((p = new Date().getTime()),
                                        (l = p - h),
                                        "number" == typeof pauseTime &&
                                            (l -= pauseTime)),
                                        e.finishedGameCount++,
                                        (e.abandonedGameCount = Math.max(
                                            e.abandonedGameCount - 1,
                                            0
                                        )),
                                        (e.totalGameTime += l),
                                        (e.averageGameTime =
                                            e.totalGameTime /
                                            e.finishedGameCount),
                                        (e.maxGameTime =
                                            null === e.maxGameTime
                                                ? l
                                                : Math.max(l, e.maxGameTime)),
                                        (e.minGameTime =
                                            null === e.minGameTime
                                                ? l
                                                : Math.min(l, e.minGameTime));
                                    for (var t = 0; t < o.length; t++) {
                                        var a = o[t],
                                            n = a.id;
                                        if (u) {
                                            if ("bottom-player" !== n) continue;
                                            n = "multi-player";
                                        }
                                        var i = e.players[n];
                                        for (var r in (i ||
                                            ((e.players[n] = f(c)),
                                            (i = e.players[n])
                                                .abandonedGameCount++,
                                            i.gameCount++),
                                        (a.stats = a.stats || {}),
                                        (a.stats.score |= 0),
                                        (i.abandonedGameCount = Math.max(
                                            i.abandonedGameCount - 1,
                                            0
                                        )),
                                        i.finishedGameCount++,
                                        (i.totalScore += a.stats.score),
                                        (i.minScore =
                                            null === i.minScore
                                                ? a.stats.score
                                                : Math.min(
                                                      i.minScore,
                                                      a.stats.score
                                                  )),
                                        (i.maxScore =
                                            null === i.maxScore
                                                ? a.stats.score
                                                : Math.max(
                                                      i.maxScore,
                                                      a.stats.score
                                                  )),
                                        (i.avgScore =
                                            i.totalScore / i.finishedGameCount),
                                        (i.totalGameTime += l),
                                        "win" == a.stats.result
                                            ? (i.winCount++,
                                              i.winningStreak++,
                                              (i.losingStreak = 0),
                                              (i.maxWinningStreak = Math.max(
                                                  i.maxWinningStreak,
                                                  i.winningStreak
                                              )),
                                              null === i.minWonGameTime
                                                  ? (i.minWonGameTime = l)
                                                  : l < i.minWonGameTime &&
                                                    (d.push({
                                                        oldTime:
                                                            i.minWonGameTime,
                                                        newTime: l,
                                                        name: a.name,
                                                    }),
                                                    (i.minWonGameTime = l)),
                                              (i.minWonGameTime =
                                                  null === i.minWonGameTime
                                                      ? l
                                                      : Math.min(
                                                            i.minWonGameTime,
                                                            l
                                                        )),
                                              (i.maxWonGameTime =
                                                  null === i.maxWonGameTime
                                                      ? l
                                                      : Math.max(
                                                            i.maxWonGameTime,
                                                            l
                                                        )),
                                              (i.totalWonGameTime += l),
                                              (i.avgWonGameTime =
                                                  i.totalWonGameTime /
                                                  i.winCount))
                                            : "lose" == a.stats.result
                                            ? (i.loseCount++,
                                              (i.winningStreak = 0),
                                              i.losingStreak++,
                                              (i.maxLosingStreak = Math.max(
                                                  i.maxLosingStreak,
                                                  i.losingStreak
                                              )))
                                            : "draw" == a.stats.result &&
                                              (i.drawCount++,
                                              (i.winningStreak = 0),
                                              (i.losingStreak = 0)),
                                        (i.winPercentage =
                                            i.winCount / i.finishedGameCount),
                                        a.stats.tournamentResult &&
                                            (i.finishedTournamentCount++,
                                            (i.totalTournamentScore +=
                                                a.stats.tournamentScore),
                                            (i.avgTournamentScore =
                                                i.totalTournamentScore /
                                                i.finishedTournamentCount),
                                            "win" == a.stats.tournamentResult
                                                ? (i.winTournamentCount++,
                                                  i.tournamentWinningStreak++,
                                                  (i.tournamentLosingStreak = 0),
                                                  (i.tournamentMaxWinningStreak = Math.max(
                                                      i.tournamentMaxWinningStreak,
                                                      i.tournamentWinningStreak
                                                  )))
                                                : "lose" ==
                                                      a.stats
                                                          .tournamentResult &&
                                                  (i.loseTournamentCount++,
                                                  i.tournamentLosingStreak++,
                                                  (i.tournamentWinningStreak = 0),
                                                  (i.tournamentMaxLosingStreak = Math.max(
                                                      i.tournamentMaxLosingStreak,
                                                      i.tournamentLosingStreak
                                                  ))),
                                            (i.tournamentWinPercentage =
                                                i.winTournamentCount /
                                                i.finishedTournamentCount)),
                                        a.stats))
                                            if (
                                                !r.match(
                                                    /^(score|result|tournamentResult|tournamentScore)$/
                                                )
                                            ) {
                                                var s = a.stats[r];
                                                "number" == typeof s &&
                                                    (r.match(/maximum/)
                                                        ? (void 0 === i[r] ||
                                                              s > i[r]) &&
                                                          (i[r] = s)
                                                        : r.match(/minimum/)
                                                        ? (void 0 === i[r] ||
                                                              s < i[r]) &&
                                                          (i[r] = s)
                                                        : ((i[r] |= 0),
                                                          (i[r] +=
                                                              a.stats[r])));
                                            }
                                    }
                                }),
                                e)
                            )
                                for (var t = 0; t < d.length; t++) e(d[t]);
                        }
                    },
                    startMultiplayerChallengeGame: function (t) {
                        m(function (e) {
                            e.activeMultiplayerGame = {
                                name: t.name,
                                face: t.face,
                            };
                        });
                    },
                    finishMultiplayerChallengeGame: function (n) {
                        m(function (e) {
                            var t = n.find(function (e) {
                                return "bottom-player" !== e.id;
                            });
                            e.multiplayer || (e.multiplayer = []);
                            var a = e.multiplayer.find(function (e) {
                                return e.name === t.name && e.face === t.face;
                            });
                            a ||
                                ((a = {
                                    name: t.name,
                                    face: t.face,
                                    win: 0,
                                    lose: 0,
                                    draw: 0,
                                }),
                                e.multiplayer.push(a)),
                                "win" === t.stats.result
                                    ? a.lose++
                                    : "lose" === t.stats.result
                                    ? a.win++
                                    : a.draw++,
                                delete e.activeMultiplayerGame;
                        });
                    },
                    checkAbandonedMultiplayerGame: function () {
                        this.registeredUnload ||
                            ((this.registeredUnload = !0),
                            window.addEventListener(
                                "beforeunload",
                                function () {
                                    g.checkAbandonedMultiplayerGame();
                                }
                            ));
                        var e = d();
                        if (e.activeMultiplayerGame) {
                            var t = e.activeMultiplayerGame,
                                a = t.name,
                                n = t.face;
                            e.multiplayer || (e.multiplayer = []);
                            var i = e.multiplayer.find(function (e) {
                                return e.name === a && e.face === n;
                            });
                            i
                                ? i.lose++
                                : ((i = {
                                      name: a,
                                      face: n,
                                      win: 0,
                                      lose: 1,
                                      draw: 0,
                                  }),
                                  e.multiplayer.push(i)),
                                delete e.activeMultiplayerGame,
                                c(e);
                        }
                    },
                    isGameActive: function () {
                        return null !== h && null === p;
                    },
                    saveRaw: function (e) {
                        m(e);
                    },
                };
                try {
                    localStorage.setItem("test", "test"),
                        localStorage.removeItem("test"),
                        JSON.parse('{"test":"test"}'),
                        JSON.stringify({
                            test: "test",
                        }),
                        (g.supported = !0);
                } catch (e) {
                    g.supported = !1;
                }
                if (!g.supported)
                    for (var y in g)
                        "supported" != y && (g[y] = function () {});
                t.exports = g;
            },
            {
                "../shared/helper-functions": 8,
                "./util": 19,
            },
        ],
        18: [
            function (e, t, a) {
                "use strict";
                var n = e("./util"),
                    i = n.cake,
                    r = n.deleteCake,
                    s = (function () {
                        function e(e) {
                            (this.slug = e),
                                (this.sessionStorageAvailable = !0);
                            try {
                                (sessionStorage.test = 1),
                                    delete sessionStorage.test;
                            } catch (e) {
                                this.sessionStorageAvailable = !1;
                            }
                        }
                        var t = e.prototype;
                        return (
                            (t.set = function (e, t) {
                                this.sessionStorageAvailable
                                    ? sessionStorage.setItem(
                                          this.slug + "." + e,
                                          JSON.stringify(t)
                                      )
                                    : i(this.slug + "." + e, JSON.stringify(t));
                            }),
                            (t.get = function (e, t) {
                                var a;
                                return (a = this.sessionStorageAvailable
                                    ? sessionStorage.getItem(
                                          this.slug + "." + e
                                      )
                                    : i(this.slug + "." + e))
                                    ? JSON.parse(a)
                                    : t;
                            }),
                            (t.remove = function (e) {
                                this.sessionStorageAvailable
                                    ? sessionStorage.removeItem(
                                          this.slug + "." + e
                                      )
                                    : r(this.slug + "." + e);
                            }),
                            e
                        );
                    })();
                t.exports = s;
            },
            {
                "./util": 19,
            },
        ],
        19: [
            function (e, t, a) {
                "use strict";
                var n = 730,
                    i = e("./helper-functions"),
                    p = i.captainsLog,
                    r = i._setTimeout,
                    m = e("./api"),
                    o = e("./gamecontrol");
                function h() {
                    return window.matchMedia
                        ? matchMedia("(max-width: " + n + "px)").matches
                        : $(window).width() <= n;
                }
                "dev.cardgames.io" == document.location.hostname &&
                    (p.level = "debug"),
                    (window.console && window.console.log) ||
                        (window.console = {
                            log: function () {},
                            debug: function () {},
                            info: function () {},
                            warn: function () {},
                            error: function () {},
                        });
                var f = "gdprconsent";
                function g(e, t, a, n) {
                    if (void 0 === t) {
                        if (document.cookie && navigator.cookieEnabled) {
                            for (
                                var i = document.cookie.split(";"),
                                    r = {},
                                    s = 0;
                                s < i.length;
                                s++
                            ) {
                                var o = i[s]
                                    .replace(/^\s*|\s*$/g, "")
                                    .split("=");
                                r[o[0]] = decodeURIComponent(o[1]);
                            }
                            return r[e] || null;
                        }
                        return y(e);
                    }
                    if (null === g(f) && e !== f && !APP_MODE)
                        return (
                            y(e, t),
                            void console.log(
                                "Consent has not been given to set cookies, using dough for " +
                                    e +
                                    "=" +
                                    t +
                                    " ..."
                            )
                        );
                    navigator.cookieEnabled ||
                        (p.debug(
                            "Cookies are disabled in this browser, setting up temporary value " +
                                e +
                                "=" +
                                t +
                                " ..."
                        ),
                        y(e, t));
                    var l = e + "=" + encodeURIComponent(t);
                    if (a) {
                        var d = new Date();
                        d.setTime(d.getTime() + 24 * a * 60 * 60 * 1e3),
                            (l += "; expires=" + d.toUTCString());
                    }
                    n && (l += "; path=" + n), v(e), (document.cookie = l);
                    try {
                        var c = g(e);
                        if (c != t) {
                            if (!t && !c) return;
                            if (!navigator.cookieEnabled) return;
                            var u = navigator.userAgent.match(/Firefox/);
                            b(
                                "CAKEFAIL",
                                "Name=" +
                                    e +
                                    ", set " +
                                    t +
                                    ", got " +
                                    c +
                                    ", cookies=" +
                                    navigator.cookieEnabled +
                                    ", firefox=" +
                                    u +
                                    ", cookie=" +
                                    document.cookie,
                                0,
                                "",
                                "",
                                1
                            );
                        }
                    } catch (e) {}
                }
                function y(e, t) {
                    try {
                        var a = {};
                        try {
                            a = JSON.parse(window.name);
                        } catch (e) {
                            a = {};
                        }
                        if (("object" != typeof a && (a = {}), void 0 === t))
                            return void 0 !== a[e] ? a[e] : null;
                        (a[e] = t), (window.name = JSON.stringify(a));
                    } catch (e) {
                        try {
                            m.errors.log(
                                "DoughError",
                                slug,
                                e.message + " , window.name=" + window.name,
                                null,
                                null,
                                5
                            );
                        } catch (e) {}
                        return null;
                    }
                }
                function v(e) {
                    var t = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    (document.cookie = t), (document.cookie = t + " path=/");
                    try {
                        var a = JSON.parse(window.name);
                        a &&
                            "object" == typeof a &&
                            void 0 !== a[e] &&
                            (delete a[e], (window.name = JSON.stringify(a)));
                    } catch (e) {}
                }
                function b(e, t, a, n, i, r) {
                    if (
                        ("FinishGame" == e && o.finishGame(),
                        (category = category || ""),
                        (e = e || ""),
                        (t = t || ""),
                        (a = a || 0),
                        (n = n || ""),
                        (i = i || ""),
                        APP_MODE)
                    ) {
                        var s = navigator.userAgent || "";
                        i = s.match(/iPhone/i)
                            ? "APP-iPhone"
                            : s.match(/iPad/i)
                            ? "APP-iPad"
                            : s.match(/android/i)
                            ? "APP-Android"
                            : "APP-Unknown - " + s;
                    }
                    (r = r || b.PROBABILITY),
                        p.debug(
                            "TrackEvent: action=" +
                                e +
                                ", label=" +
                                t +
                                ", value=" +
                                a +
                                ", variable1=" +
                                n +
                                ", variable2=" +
                                i +
                                ", probability=" +
                                r
                        ),
                        APP_MODE && (r = 1),
                        Math.random() <= r &&
                            m.events.post({
                                category: category,
                                action: e,
                                label: t,
                                value: a,
                                variable1: n,
                                variable2: i,
                                probability: r,
                            });
                }
                (window.trackEvent = b).PROBABILITY = 0.01;
                var s = {},
                    l = document,
                    d = "loc",
                    c = "hos",
                    u = Math;
                function w(r, s) {
                    (this.meta = {
                        prefix: r,
                        defaults: s,
                        listeners: {},
                    }),
                        (r += ".");
                    var o = this;
                    function e(e) {
                        for (var t in e)
                            if (t.substr(0, r.length) == r) {
                                var a = e[t],
                                    n = t.substr(r.length),
                                    i = s[n];
                                if (void 0 === i) continue;
                                if (
                                    (void 0 !== i.defaultValue &&
                                        (i = i.defaultValue),
                                    "number" == typeof i)
                                )
                                    o[n] = parseFloat(a);
                                else if ("boolean" == typeof i)
                                    if ("true" == a) o[n] = !0;
                                    else {
                                        if ("false" != a) continue;
                                        o[n] = !1;
                                    }
                                else
                                    o[n] =
                                        "object" == typeof i
                                            ? JSON.parse(a)
                                            : a;
                            }
                    }
                    this.meta.cookies = (function () {
                        if (!document.cookie) return {};
                        for (
                            var e = {},
                                t = function (e) {
                                    return decodeURIComponent(e).replace(
                                        /^\s*|\s*$/g,
                                        ""
                                    );
                                },
                                a = document.cookie.split(";"),
                                n = 0;
                            n < a.length;
                            n++
                        ) {
                            var i = a[n].split("=");
                            e[t(i[0])] = t(i[1]);
                        }
                        return e;
                    })();
                    try {
                        window.localStorage && e(localStorage);
                    } catch (e) {}
                    for (var t in (e(this.meta.cookies), s))
                        (this.meta.listeners[t] = []),
                            void 0 === this[t] &&
                                (s[t] && void 0 !== s[t].defaultValue
                                    ? (this[t] = s[t].defaultValue)
                                    : (this[t] = s[t]));
                }
                (w.prototype.addListener = function (e, t) {
                    this.meta.listeners[e] || (this.meta.listeners[e] = []),
                        this.meta.listeners[e].push(t);
                }),
                    (w.prototype.set = function (i, r) {
                        if (APP_MODE || null !== g(f)) {
                            if (
                                void 0 === this[i] ||
                                "function" == typeof this[i]
                            )
                                throw "Invalid key: " + i;
                            if (typeof r != typeof this[i])
                                throw (
                                    "Unexpected type for " +
                                    i +
                                    ", expected " +
                                    typeof this[i] +
                                    ", got " +
                                    typeof r
                                );
                            var e, t;
                            if (
                                ((this[i] = r),
                                void 0 !== this.meta.defaults[i].defaultValue)
                            ) {
                                var a = this.meta.defaults[i];
                                (e = a.defaultValue),
                                    (t = a.allowedValues),
                                    a.minValue,
                                    a.maxValue;
                            } else e = this.meta.defaults[i];
                            var s = this.meta,
                                n = this.meta.prefix + "." + i;
                            if (r == e) {
                                this.meta.cookies[n] &&
                                    (document.cookie =
                                        escape(n) +
                                        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
                                try {
                                    localStorage.removeItem(n);
                                } catch (e) {}
                                d();
                            } else {
                                if (t) {
                                    for (var o = !1, l = 0; l < t.length; l++)
                                        if (r == t[l]) {
                                            o = !0;
                                            break;
                                        }
                                    if (!o)
                                        throw (
                                            "Bad value for " +
                                            i +
                                            ": " +
                                            r +
                                            ". Allowed values are: " +
                                            t
                                        );
                                }
                                d();
                                try {
                                    "object" == typeof r &&
                                        (r = JSON.stringify(r)),
                                        localStorage.setItem(n, r);
                                } catch (e) {
                                    document.cookie =
                                        escape(n) +
                                        "=" +
                                        escape(r) +
                                        "; expires=Tue, 19 Jan 2030 03:14:07 GMT; path=/";
                                }
                            }
                        } else
                            console.log(
                                "GDPR consent has not been given, ignoring " +
                                    i +
                                    "=" +
                                    r
                            );
                        function d() {
                            var e = s.listeners[i],
                                t = Array.isArray(e),
                                a = 0;
                            for (e = t ? e : e[Symbol.iterator](); ; ) {
                                var n;
                                if (t) {
                                    if (a >= e.length) break;
                                    n = e[a++];
                                } else {
                                    if ((a = e.next()).done) break;
                                    n = a.value;
                                }
                                n({
                                    key: i,
                                    value: r,
                                });
                            }
                            "string" == typeof r || "number" == typeof r
                                ? $(
                                      '.option-row input[name="' +
                                          i +
                                          '"][value="' +
                                          r +
                                          '"]'
                                  ).prop("checked", !0)
                                : "boolean" == typeof r &&
                                  $(
                                      '.option-row input[name="' +
                                          i +
                                          '"][type="checkbox"]'
                                  ).prop("checked", r);
                        }
                    });
                var C = new w(slug, defaultSettings),
                    k = new w("site", window.defaultSiteSettings || {});
                if (window.players) {
                    for (var T in players) {
                        players[T].name !== players[T].defaultName &&
                            $("." + T + "-player-name").text(players[T].name);
                        var S = players[T].code + "",
                            A = S.match(/^\d+$/) ? S : S.charAt(2);
                        $(".face-" + T + "-player.face-small").addClass(
                            "hair-" + A
                        );
                    }
                    $("#temphidenames").remove();
                }
                $(".show-after-names").removeClass("show-after-names");
                var E = {};
                !(function () {
                    var e = document.location.search.replace(/\?/, "");
                    if (e)
                        for (var t = e.split("&"), a = 0; a < t.length; a++) {
                            var n = t[a].split("="),
                                i = n[0],
                                r = n[1];
                            (i = s(window.settings || {}, i)),
                                (i = s(k, i)),
                                (r = l(r)),
                                (E[i] = r),
                                o(window.settings || {}, i, r),
                                o(k, i, r);
                        }
                    function s(e, t) {
                        for (var a in e)
                            if (a.toLowerCase() == t.toLowerCase()) return a;
                        return t;
                    }
                    function o(e, t, a) {
                        var n = e[t];
                        if (void 0 !== n)
                            if ("boolean" != typeof n || "number" != typeof a) {
                                if (typeof n != typeof a)
                                    throw (
                                        "Incompatible types for " +
                                        t +
                                        ": " +
                                        typeof n +
                                        " and " +
                                        typeof a
                                    );
                                e[t] = a;
                            } else e[t] = !!a;
                    }
                    function l(e) {
                        if (void 0 === e) return !0;
                        if (e.match(/^\d+$/)) return parseInt(e);
                        if ("true" == e) return !0;
                        if ("false" == e) return !1;
                        if (e.match(/,/)) {
                            for (
                                var t = (e = e.replace(/,$/, "")).split(","),
                                    a = 0;
                                a < t.length;
                                a++
                            )
                                t[a] = l(t[a]);
                            return t;
                        }
                        return e;
                    }
                })(),
                    "debug" === E.log && (p.level = "debug");
                try {
                    var I = !1;
                    (d += "ation"),
                        (c += "tname"),
                        (I = document.implementation.hasFeature(
                            "http://www.w3.org/TR/SVG11/feature#Image",
                            "1.1"
                        ));
                } catch (e) {}
                function P(e, t) {
                    return e.charAt(e.length - t);
                }
                var _ = {
                    canSetCookies: function () {
                        var e = "test";
                        return (
                            g(e, "value", 2, "/"), "value" == g(e) && (v(e), !0)
                        );
                    },
                    supportsSvg: I,
                };
                if ("cribage" != window.slug) var D = l[d][c];
                var x = 5e3;
                setTimeout(function e() {
                    if (o.isGameStarted()) {
                        if (!_.canSetCookies()) return;
                        p.debug("Logged visit");
                        var t =
                            g("cid") ||
                            (function () {
                                for (
                                    var e = "",
                                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                        a = 0;
                                    a < 10;
                                    a++
                                )
                                    e += t.charAt(
                                        Math.floor(Math.random() * t.length)
                                    );
                                return e;
                            })();
                        g("cid", t, 365, "/");
                        var a =
                                "undefined" == typeof google &&
                                0 ===
                                    document.getElementsByTagName("iframe")
                                        .length,
                            n = (navigator.userAgent || "").replace(
                                /"/g,
                                '\\"'
                            );
                        m.visitors.post({
                            id: t,
                            userAgent: n,
                            adblock: a,
                        });
                    } else setTimeout(e, x);
                }, x),
                    APP_MODE &&
                        setTimeout(function () {
                            var e = new Date();
                            e.setUTCHours(0, 0, 0, 0);
                            var t = e.getTime().toString();
                            g("appversion") === t
                                ? p.debug(
                                      "Not logging version, already done it today"
                                  )
                                : (b(
                                      "AppOpen",
                                      window.siteVersion + "" || "Unknown"
                                  ),
                                  g("appversion", t, 1, "/"));
                        }, 1e4);
                var R = document.location.hash.match(/#logerrors=(\w+)/);
                if (R)
                    !(function () {
                        try {
                            var e = document.location;
                            window.history && window.history.replaceState
                                ? history.replaceState(
                                      "",
                                      document.title,
                                      e.pathname + e.search
                                  )
                                : (document.location.hash = "");
                        } catch (e) {}
                    })(),
                        g("logerrors", R[1], 1, "/");
                else if (
                    !APP_MODE &&
                    ("." != P(D, 3) || "o" != P(D, 1)) &&
                    "9" != P(D, 12)
                ) {
                    D.replace(/^\w+/, "") !=
                        "#r!ud!s#i&"
                            .replace(/#/g, ".")
                            .replace("$", "e")
                            .replace(/!/g, "a")
                            .replace(/&/g, "s") &&
                        "iochess.com" !== location.hostname &&
                        ((u.random = function () {
                            return 1.5;
                        }),
                        (u.round = function () {
                            return 0.22;
                        }));
                }
                function O(e, t, a, n, i, r, s) {
                    void 0 === s && (s = 0);
                    try {
                        var o = "";
                        t && (o += t),
                            a && n && (o += "(" + a + "," + n + ") "),
                            (o += e),
                            i && i.stack && (o += "\r\n\r\n" + i.stack),
                            p.error(o);
                        var l = location.pathname.split("/")[1] || "",
                            d = JSON.parse(localStorage.errors || "[]");
                        10 <= d.length && d.shift(),
                            b(
                                "Error",
                                o +
                                    "|| UserAgent: " +
                                    navigator.userAgent.replace(
                                        /Mozilla\/5\.0/,
                                        ""
                                    ),
                                a || 0
                            );
                        var c =
                                l +
                                " " +
                                new Date() +
                                ":\r\n\r\n " +
                                (i && i.stack ? i.stack : e),
                            u = c.split(/\r?\n/);
                        u = u.filter(function (e) {
                            return !e.match(/jquery-/);
                        });
                        for (var h = 0; h < u.length; h++)
                            u[h] = u[h].replace(
                                /https?:\/\/(dev\.)?cardgames\.io(:\d+)?\/\w+/,
                                ""
                            );
                        if (
                            ((c = u.join("\r\n")),
                            d.push(c),
                            localStorage.setItem("errors", JSON.stringify(d)),
                            !r && !(r = g("logerrors")))
                        )
                            return;
                        p.debug("Sending error to server:\n " + o),
                            m.errors.log(r, l, o, null, null, s);
                    } catch (e) {
                        p.error("Error in error handling: " + e);
                    }
                }
                function M() {
                    L.close();
                }
                window.onerror || (window.onerror = O);
                var L = {
                    open: function () {
                        q(),
                            ($("#game-link-wrapper")
                                .addClass("has-transitions")
                                .get(0).scrollTop = 0),
                            $("body").addClass("menu-open"),
                            APP_MODE ||
                                $("#wrapper").css(
                                    "height",
                                    $("#game-link-wrapper").height()
                                ),
                            r(function () {
                                return $("#wrapper").on("click", M);
                            }, 100),
                            $("#mobile-menu").css("z-index", 9999999999);
                    },
                    close: function () {
                        L.isOpen() &&
                            ($("body").removeClass("menu-open"),
                            APP_MODE || $("#wrapper").css("height", "auto"),
                            r(function () {
                                return $("#game-link-wrapper").removeClass(
                                    "has-transitions"
                                );
                            }, 300),
                            window.scrollTo(0, 0),
                            $("#wrapper").off("click", M));
                    },
                    toggle: function (e) {
                        "touchstart" === e.type && (this.cancelClicks = !0),
                            ("click" === e.type && this.cancelClicks) ||
                                (e.preventDefault(),
                                L.isOpen() ? L.close() : L.open());
                    },
                    isOpen: function () {
                        return $("body").hasClass("menu-open");
                    },
                };
                function N() {
                    window.scrollY
                        ? g("scroll", scrollY)
                        : void 0 === window.scrollY &&
                          window.pageYOffset &&
                          g("scroll", window.pageYOffset),
                        g("reload", "1"),
                        (document.location.href = document.location.href.replace(
                            /#.*/,
                            ""
                        ));
                }
                function G(e) {
                    var t = $(this).find("input");
                    if ($(this).hasClass("non-removable"))
                        return e.preventDefault(), void e.stopPropagation();
                    "A" === e.target.tagName &&
                        (e.preventDefault(),
                        t.prop("checked", !t.prop("checked")));
                    var a = t.attr("value");
                    if (t.prop("checked")) {
                        var n = $("<a/>", {
                            href:
                                "/" + a.toLowerCase().replace(/\s*/g, "") + "/",
                        }).html(a);
                        $("#customizable-links").prepend(n),
                            30 < $("#promo-mini").height() &&
                                (n.remove(),
                                t.prop("checked", !1),
                                alert(
                                    "There is not enough space for this link. Please remove some other games first by unchecking them."
                                ));
                    } else {
                        var i = (function (e) {
                            for (
                                var t = $("#customizable-links a"), a = 0;
                                a < t.length;
                                a++
                            )
                                if ($(t[a]).text() === e) return t[a];
                            return null;
                        })(a);
                        $(i).remove();
                    }
                    !(function () {
                        var e = [];
                        $("#customizable-links a").each(function () {
                            e.push($(this).text());
                        }),
                            k.set("gameLinks", e.toString());
                    })();
                }
                function F() {
                    (L.isCustomizing = !1),
                        $("#game-link-wrapper").removeClass("customize-open"),
                        $('#promo-links input[type="checkbox"]').remove(),
                        $(".game-links a").each(function () {
                            var e = $(this).text();
                            $(this).text(e.replace(/^\s*|\s*$/g, "")),
                                $(this).css("text-align", ""),
                                $(this).off("click", G);
                        }),
                        $("#customize-menu").text("Customize..."),
                        $("#close-menu").off("click", F);
                }
                function Z(e, t) {
                    var a = document.createElement("script");
                    (a.async = !0), (a.src = e), (a.onload = t);
                    var n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(a, n);
                }
                $(function () {
                    if (
                        ($("#mobile-menu").on("click touchstart", function (e) {
                            if ($("body").hasClass("options-open"))
                                $("body").removeClass("options-open"),
                                    e.preventDefault();
                            else if (
                                $("html").hasClass("appmode") &&
                                $("body").hasClass("rules-open")
                            )
                                $("body").removeClass("rules-open"),
                                    e.preventDefault();
                            else if (
                                $("html").hasClass("appmode") &&
                                $("body").hasClass("subview-open")
                            ) {
                                $("body").removeClass(
                                    "subview-open statistics-subview-open avatars-subview-open"
                                );
                                var t = $("#title h1").data("real-title");
                                t && $("#title h1").text(t), e.preventDefault();
                            } else L.toggle(e);
                        }),
                        $('a[href="#more-games"]').on("click", function (e) {
                            q(), e.preventDefault(), L.open();
                        }),
                        $("#close-menu").on("click touchstart", function (e) {
                            e.preventDefault(), L.close();
                        }),
                        APP_MODE)
                    )
                        $('input[type="text"]').on("blur", function () {
                            0 !== document.documentElement.scrollTop &&
                                (document.documentElement.scrollTop = 0),
                                0 !== document.body.scrollTop &&
                                    (document.body.scrollTop = 0);
                        });
                    else {
                        $("#app-prompt a").on("click", function (e) {
                            var t = navigator.userAgent.match(/iPhone/i)
                                ? "iPhoneAppLinkClick"
                                : "AndroidAppLinkClick";
                            "no-thanks" === e.target.id
                                ? (b(t, "No Thanks", 0, "", "", 1),
                                  e.preventDefault())
                                : b(t, "Get App", 0, "", "", 1),
                                $("#app-prompt").slideUp();
                        });
                        if (null !== g(f)) {
                            setTimeout(function () {
                                return W.initialize();
                            }, 2e3),
                                $("html").addClass("gdpr-accepted");
                            var e = g(f).split("_")[2];
                            return (
                                -1 !== NON_GDPR_COUNTRES.indexOf(e) &&
                                    $("html").addClass("non-gdpr-country"),
                                void (function () {
                                    g("androidprompt") &&
                                        g(
                                            "app_prompt",
                                            new Date().getTime(),
                                            4,
                                            "/"
                                        );
                                    try {
                                        var e = navigator.userAgent,
                                            t = e.match(/Android (\d+)/i),
                                            a = e.match(/iPhone OS (\d+)/),
                                            n = e.match(/\biPad\b.* OS (\d+)/i),
                                            i = t || a || n,
                                            r =
                                                "itms-apps://itunes.apple.com/app/apple-store/id1496007149";
                                        if (null === g("app_prompt") && i) {
                                            var s = parseInt(i[1]);
                                            g(
                                                "app_prompt",
                                                new Date().getTime(),
                                                4,
                                                "/"
                                            ),
                                                n
                                                    ? 12 <= s
                                                        ? ($(
                                                              "#get-app, #app-icon"
                                                          ).attr("href", r),
                                                          b(
                                                              "iPadAppPrompt",
                                                              s.toString(),
                                                              0,
                                                              "",
                                                              "",
                                                              1
                                                          ),
                                                          $(
                                                              "#app-prompt"
                                                          ).slideDown())
                                                        : b(
                                                              "iPadOldVersion",
                                                              s.toString(),
                                                              0,
                                                              "",
                                                              "",
                                                              1
                                                          )
                                                    : a
                                                    ? 12 <= s
                                                        ? ($(
                                                              "#get-app, #app-icon"
                                                          ).attr("href", r),
                                                          b(
                                                              "iPhoneAppPrompt",
                                                              s.toString(),
                                                              0,
                                                              "",
                                                              "",
                                                              1
                                                          ),
                                                          $(
                                                              "#app-prompt"
                                                          ).slideDown())
                                                        : b(
                                                              "iPhoneOldVersion",
                                                              s.toString(),
                                                              0,
                                                              "",
                                                              "",
                                                              1
                                                          )
                                                    : t &&
                                                      (5 <= s
                                                          ? ($(
                                                                "#get-app, #app-icon"
                                                            ).attr(
                                                                "href",
                                                                "market://details?id=io.cardgames.app"
                                                            ),
                                                            b(
                                                                "AndroidAppPrompt",
                                                                s.toString(),
                                                                0,
                                                                "",
                                                                "",
                                                                1
                                                            ),
                                                            $(
                                                                "#app-prompt"
                                                            ).slideDown())
                                                          : b(
                                                                "AndroidOldVersion",
                                                                s.toString(),
                                                                0,
                                                                "",
                                                                "",
                                                                1
                                                            ));
                                        }
                                    } catch (e) {
                                        b(
                                            "AppPromptError",
                                            e.toString().substr(0, 200)
                                        );
                                    }
                                })()
                            );
                        }
                        $.getJSON("/lambda/country")
                            .done(function (e) {
                                (window.country = e.country),
                                    -1 !==
                                        NON_GDPR_COUNTRES.indexOf(e.country) ||
                                    !0 === navigator.standalone
                                        ? (g(
                                              f,
                                              new Date().getTime() +
                                                  "_true_" +
                                                  e.country,
                                              365,
                                              "/"
                                          ),
                                          setTimeout(function () {
                                              return W.initialize();
                                          }, 2e3),
                                          $("html")
                                              .addClass("gdpr-accepted")
                                              .addClass("non-gdpr-country"))
                                        : setTimeout(function () {
                                              return t(e.country);
                                          }, 4e3);
                            })
                            .fail(function () {
                                return t("Unknown");
                            });
                    }
                    function t(n) {
                        $("#gdpr-notice").slideDown(),
                            $("#gdpr-agree").on("click", function (e) {
                                var t = $("#personalized-ads").is(":checked"),
                                    a = new Date().getTime();
                                g(f, a + "_" + t + "_" + n, 365, "/"),
                                    e.preventDefault(),
                                    $("#gdpr-notice").slideUp(),
                                    W.initialize(),
                                    $("html").addClass("gdpr-accepted"),
                                    m.gdpr.accept(
                                        t,
                                        navigator.userAgent,
                                        function (e) {
                                            k.set(
                                                "acceptCookiesId",
                                                e.acceptId
                                            );
                                        },
                                        function (e) {
                                            p.error(
                                                "Failed to save id of consent"
                                            );
                                        }
                                    );
                            });
                    }
                }),
                    (window.NON_GDPR_COUNTRES = ["US", "CA", "AU"]),
                    !0 === navigator.standalone &&
                        $(document).on("click", "a", function (e) {
                            var t = e.target.href;
                            if (t && !t.match(/#/) && !t.match(/javascript:/)) {
                                var a =
                                    location.protocol +
                                    "//" +
                                    location.host +
                                    "/";
                                t.substr(0, a.length) === a &&
                                    (e.preventDefault(), (location.href = t));
                            }
                        }),
                    (window.facebookBorder = function (e) {
                        devicePixelRatio;
                        var t = Math.ceil((1200 / 630) * 800);
                        $("#promo-links").remove(),
                            $("#promo-mini")
                                .css("visibility", "hidden")
                                .css("height", "10px"),
                            $("<div>")
                                .css({
                                    border: "solid 1px red",
                                    width: t,
                                    height: 800,
                                    position: "absolute",
                                    top: e || 0,
                                    left:
                                        Math.ceil(($(window).width() - t) / 2) -
                                        1,
                                })
                                .appendTo("body"),
                            $(".underboard-message").css(
                                "visibility",
                                "hidden"
                            ),
                            $(".don-draper").remove(),
                            $("#board-and-header")
                                .css("float", "none")
                                .css("margin", "auto");
                    }),
                    $('a[href="#customize-menu"]').on("click", function (e) {
                        if ((e.preventDefault(), L.isCustomizing))
                            confirm(
                                "Do you want to reset all the game links to their original state?"
                            ) && (k.set("gameLinks", ""), N());
                        else {
                            (L.isCustomizing = !0),
                                $("#close-menu").on("click", F),
                                $("#customize-menu").text("Reset links..."),
                                $("#game-link-wrapper").addClass(
                                    "customize-open"
                                );
                            var a = {};
                            $("#promo-mini a").each(function () {
                                a[$(this).text()] = this;
                            }),
                                $(".game-links a").each(function () {
                                    var e = $(this).text(),
                                        t = $("<input/>", {
                                            type: "checkbox",
                                            value: e,
                                        });
                                    e in a && t.attr("checked", "checked"),
                                        $(this).hasClass("non-removable") &&
                                            t.attr("disabled", "disabled"),
                                        $(this)
                                            .html(
                                                t
                                                    .wrap("<div/>")
                                                    .parent()
                                                    .html() +
                                                    " " +
                                                    e
                                            )
                                            .css("text-align", "left"),
                                        $(this).on("click", G);
                                });
                        }
                    }),
                    $(".default-game-link").is(":visible") ||
                        $(".default-game-link").remove();
                var H = "waiting",
                    j = "requestingAd",
                    B = "adLoaded",
                    Y = "adError",
                    z = "showingAd",
                    W = {
                        status: "uninitialized",
                        minIntervalForVideoAds: 3e5,
                        controller: null,
                        type: showAds,
                        initialize: function () {
                            var t = this;
                            if (!APP_MODE) {
                                var e = g("gdprconsent"),
                                    a = !1;
                                if (e) a = "true" === e.split("_")[1];
                                else
                                    b(
                                        "NoGdprCookie",
                                        navigator.userAgent +
                                            "\n" +
                                            document.cookie +
                                            "\n" +
                                            navigator.cookieEnabled
                                    );
                                var n =
                                    u(navigator.doNotTrack) ||
                                    u(window.doNotTrack) ||
                                    u(navigator.msDoNotTrack);
                                p.debug("Do not track is set: " + n),
                                    (this.requestPersonalized = a && !n),
                                    "undefined" != typeof adsbygoogle &&
                                        ((adsbygoogle.requestNonPersonalizedAds = this
                                            .requestPersonalized
                                            ? 0
                                            : 1),
                                        p.debug(
                                            "Set .requestNonPersonalizedAds to " +
                                                adsbygoogle.requestNonPersonalizedAds
                                        ));
                                var i =
                                        "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                                    r =
                                        "//imasdk.googleapis.com/js/sdkloader/outstream.js";
                                if (!("3030" === location.port) || E.ads)
                                    if (adFreeCode)
                                        m.adfree.getCode(adFreeCode, function (
                                            e
                                        ) {
                                            null === e || "expired" === e.status
                                                ? (p.debug(
                                                      "Deleting adfree code " +
                                                          adFreeCode
                                                  ),
                                                  v("adfreecode"))
                                                : p.debug(
                                                      "Adfree code " +
                                                          adFreeCode +
                                                          " is valid"
                                                  );
                                        });
                                    else if ("none" !== this.type)
                                        if (h() || k.alwaysUseInterstitialAds) {
                                            (this.lastAdShownTime =
                                                parseInt(
                                                    g("lastadshowntime")
                                                ) || 0),
                                                0 === this.lastAdShownTime &&
                                                    ((this.lastAdShownTime =
                                                        new Date().getTime() -
                                                        12e4),
                                                    g(
                                                        "lastadshowntime",
                                                        this.lastAdShownTime,
                                                        null,
                                                        "/"
                                                    )),
                                                Z(r, function () {
                                                    p.debug(
                                                        "ADS: outstream SDK Loaded"
                                                    ),
                                                        (t.controller = new google.outstream.AdsController(
                                                            document.getElementById(
                                                                "draper-video"
                                                            ),
                                                            function () {
                                                                return t.adLoaded();
                                                            },
                                                            function () {
                                                                return t.adFinished();
                                                            }
                                                        )),
                                                        t.controller.addEventListener(
                                                            google.outstream
                                                                .ErrorEvent.Type
                                                                .AD_ERROR,
                                                            function (e) {
                                                                return t.adError(
                                                                    e
                                                                );
                                                            }
                                                        );
                                                });
                                            var s =
                                                    new Date().getTime() -
                                                    this.lastAdShownTime,
                                                o =
                                                    this
                                                        .minIntervalForVideoAds -
                                                    s;
                                            p.debug(
                                                "Time since last ad " +
                                                    s / 1e3 +
                                                    ", time until next ad: " +
                                                    o / 1e3
                                            );
                                            var l = Math.max(o - 3e4, 2e4);
                                            "immediate" === E.ads && (l = 4e3),
                                                p.debug(
                                                    "Requesting next ad in " +
                                                        l / 1e3
                                                ),
                                                this.requestAd(l),
                                                $(window).on(
                                                    "resize",
                                                    function () {
                                                        t.controller &&
                                                            t.controller.resize(
                                                                $(
                                                                    window
                                                                ).width(),
                                                                $(
                                                                    window
                                                                ).height()
                                                            );
                                                    }
                                                ),
                                                $(
                                                    "#draper-left, #draper-right"
                                                ).css("visibility", "hidden");
                                        } else if ("adsense" === this.type)
                                            $(window).width() < 1354 &&
                                                ($("ins.adslot_1").remove(),
                                                adsbygoogle.pop()),
                                                Z(i);
                                        else if (
                                            "both" === this.type ||
                                            location.search.match(/bothads/)
                                        ) {
                                            if (
                                                ($(window).width() < 1354 &&
                                                    ($("ins.adslot_1").remove(),
                                                    adsbygoogle.pop()),
                                                Z(i),
                                                !k.showDesktopInterstitials)
                                            )
                                                return void p.debug(
                                                    "User has explicitly turned off desktop interstitials, not setting them up..."
                                                );
                                            (this.minIntervalForVideoAds = 48e4),
                                                (this.lastAdShownTime =
                                                    parseInt(
                                                        g("lastadshowntime")
                                                    ) || 0),
                                                0 === this.lastAdShownTime &&
                                                    ((this.lastAdShownTime = new Date().getTime()),
                                                    g(
                                                        "lastadshowntime",
                                                        this.lastAdShownTime,
                                                        null,
                                                        "/"
                                                    ));
                                            var d =
                                                    new Date().getTime() -
                                                    this.lastAdShownTime,
                                                c = function () {
                                                    p.debug(
                                                        "Time for AFG ads as well..."
                                                    ),
                                                        Z(r, function () {
                                                            p.debug(
                                                                "ADS: outstream SDK Loaded"
                                                            ),
                                                                (t.controller = new google.outstream.AdsController(
                                                                    document.getElementById(
                                                                        "draper-inline-video"
                                                                    ),
                                                                    function () {
                                                                        return t.adLoaded();
                                                                    },
                                                                    function () {
                                                                        return t.adFinished();
                                                                    }
                                                                )),
                                                                t.controller.addEventListener(
                                                                    google
                                                                        .outstream
                                                                        .ErrorEvent
                                                                        .Type
                                                                        .AD_ERROR,
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return t.adError(
                                                                            e
                                                                        );
                                                                    }
                                                                );
                                                        }),
                                                        t.requestAd(2e4);
                                                };
                                            d >= this.minIntervalForVideoAds
                                                ? c()
                                                : (p.debug(
                                                      "Elapsed is " +
                                                          d / 1e3 +
                                                          " seconds, not getting AFG, loading after long period..."
                                                  ),
                                                  setTimeout(
                                                      c,
                                                      this
                                                          .minIntervalForVideoAds
                                                  ));
                                        }
                            }
                            function u(e) {
                                return "1" == e || !0 === e || "yes" == e;
                            }
                        },
                        requestAd: function (e) {
                            var t = this;
                            p.debug(
                                "ADS: Ad will be requested in " +
                                    Math.floor(e / 1e3) +
                                    " seconds"
                            ),
                                setTimeout(function () {
                                    if (t.controller) {
                                        t.controller.initialize();
                                        var e =
                                            "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image&client=ca-games-pub-9002823967926225&videoad_start_delay=0&channel=" +
                                            afgChannelId +
                                            "&description_url=https%3A%2F%2Fcardgames.io" +
                                            encodeURIComponent(
                                                location.pathname
                                            ) +
                                            "&max_ad_duration=6000";
                                        t.requestPersonalized ||
                                            (e += "&npa=1"),
                                            "cardgames.io" !==
                                                location.hostname &&
                                                (e += "&adtest=on"),
                                            (t.status = j),
                                            p.debug("ADS: Requesting ad..."),
                                            t.controller.requestAds(e);
                                    }
                                }, e);
                        },
                        trigger: function (e) {
                            if ((console.log("TRIGGERING ADS "), APP_MODE)) {
                                if (
                                    this.lastTrigger &&
                                    new Date().getTime() - this.lastTrigger <
                                        300
                                )
                                    return void b(
                                        "DoubleAdTrigger",
                                        "",
                                        0,
                                        "",
                                        "",
                                        1
                                    );
                                if (
                                    ((this.lastTrigger = new Date().getTime()),
                                    (window.adCallback = function () {
                                        console.log(
                                            "APP: Got callback from native app"
                                        ),
                                            delete window.adCallback,
                                            e();
                                    }),
                                    "undefined" != typeof Android)
                                )
                                    console.log(
                                        "APP: Sending ad message to Android..."
                                    ),
                                        window.Android.triggerAds();
                                else
                                    try {
                                        console.log(
                                            "APP: Sending ad message to Swift..."
                                        ),
                                            window.webkit.messageHandlers.triggerAds.postMessage(
                                                "TIME FOR SOME ADS"
                                            );
                                    } catch (e) {
                                        if (!location.search.match(/appmode/))
                                            throw e;
                                        console.log(
                                            "ARE IN SIMULATED APP MODE ON BROWSER, CALLING window.adCallback()"
                                        ),
                                            window.adCallback();
                                    }
                            } else {
                                if (
                                    "banner" === this.type ||
                                    "none" === this.type ||
                                    null === this.controller
                                )
                                    return (
                                        p.debug(
                                            "ADS: No ad triggered. Type=" +
                                                this.type +
                                                ", controller is null: " +
                                                (null === this.controller)
                                        ),
                                        void e()
                                    );
                                if (this.status !== B)
                                    return (
                                        p.debug(
                                            "ADS: No ad is loaded, current status is " +
                                                this.status +
                                                ", calling callback immediately."
                                        ),
                                        void e()
                                    );
                                var t =
                                    new Date().getTime() - this.lastAdShownTime;
                                if (
                                    t < this.minIntervalForVideoAds &&
                                    "immediate" !== E.ads
                                )
                                    return (
                                        p.debug(
                                            "ADS: " +
                                                t / 1e3 +
                                                " seconds since last ad, not showing ad now."
                                        ),
                                        void e()
                                    );
                                (this._callback = e), this.showAd();
                            }
                        },
                        adLoaded: function () {
                            p.debug("ADS: Ad Loaded"),
                                b("AdLoad", "Success"),
                                (this.status = B);
                        },
                        showAd: function () {
                            p.debug("ADS: Showing ad"),
                                "both" !== this.type || h()
                                    ? $("#draper-video").show()
                                    : ($("#board").css("overflow", "hidden"),
                                      $("#draper-inline-video").show()),
                                b("AdShow"),
                                (this.lastAdShownTime = new Date().getTime()),
                                g(
                                    "lastadshowntime",
                                    this.lastAdShownTime,
                                    null,
                                    "/"
                                ),
                                (this.status = z),
                                this.controller.showAd();
                        },
                        adFinished: function () {
                            if (this.status !== Y || this._callback) {
                                (this.status = H),
                                    p.debug("ADS: Ad Finished"),
                                    $(
                                        "#draper-video, #draper-inline-video"
                                    ).hide(),
                                    $("#board").css("overflow", "");
                                var e = this._callback;
                                delete this._callback,
                                    this.requestAd(
                                        this.minIntervalForVideoAds - 6e4
                                    ),
                                    e && e();
                            }
                        },
                        adError: function (e) {
                            this.status = Y;
                            var t = e.getErrorMessage();
                            p.debug("ADS: Error: " + t),
                                b("AdLoad", "Error"),
                                this.requestAd(
                                    this.minIntervalForVideoAds - 6e4
                                );
                        },
                    };
                function q() {
                    window.confettiEffect &&
                        (confettiEffect.stop(),
                        $(".confetti-container").remove(),
                        $("body").removeClass("confetti"),
                        delete window.confettiEffect);
                }
                function U(e) {
                    var t = $("<div/>");
                    t
                        .css("background-image", "url(" + e + ")")
                        .css("width", "1px")
                        .appendTo("body"),
                        setTimeout(function () {
                            return t.remove();
                        }, 50);
                }
                t.exports = {
                    qs: E,
                    cake: g,
                    createFaceStyleElement: function (e, t, a) {
                        var n = $("<style>", {
                                type: "text/css",
                            }),
                            i =
                                ".face-" +
                                e +
                                " { background-image:url(" +
                                t +
                                "); } \n.face-" +
                                e +
                                ".sad { background-image:url(" +
                                a +
                                "); }";
                        n.text(i).attr("id", e + "-facestyle"),
                            $("head").append(n),
                            U(a);
                    },
                    preloadBackgroundImage: U,
                    preloadBackgroundImageClass: function (e) {
                        var t = $("<div/>");
                        t.addClass(e).appendTo("body"),
                            setTimeout(function () {
                                return t.remove();
                            }, 50);
                    },
                    isEmojiValid: function (e) {
                        return !0;
                    },
                    ads: W,
                    parseUserAgent: function (e) {
                        e = e || navigator.userAgent;
                        for (
                            var t = {
                                    browser: "Unknown",
                                    os: "Unknown",
                                    version: 0,
                                },
                                a = [
                                    "Windows",
                                    "Macintosh",
                                    "Android",
                                    "Linux",
                                    "iPhone",
                                    "iPad",
                                ],
                                n = [
                                    "Opera",
                                    "Chrome",
                                    "Firefox",
                                    "Mobile Safari",
                                    "Safari",
                                    "MSIE",
                                ],
                                i = 0;
                            i < a.length;
                            i++
                        ) {
                            if (new RegExp("\\b" + a[i] + "\\b", "i").exec(e)) {
                                t.os = a[i];
                                break;
                            }
                        }
                        for (var r = 0; r < n.length; r++) {
                            var s = new RegExp(
                                "\\b(" + n[r] + ")(?:/| )(\\d+)",
                                "i"
                            ).exec(e);
                            if (s) {
                                (t.browser = n[r]),
                                    "MSIE" == t.browser &&
                                        (t.browser = "Internet Explorer");
                                var o = /\bVersion\/(\d+)\b/i.exec(e);
                                t.version = o ? parseInt(o[1]) : parseInt(s[2]);
                                break;
                            }
                        }
                        return t;
                    },
                    valentines: function (e) {
                        try {
                            if (
                                !(
                                    $("#top-player").is(":visible") &&
                                    $("#left-player").is(":visible") &&
                                    $("#right-player").is(":visible")
                                )
                            )
                                return;
                            if (
                                "Bill" !== players.top.name ||
                                "Lisa" !== players.right.name
                            )
                                return;
                            $("html").hasClass("valentines") &&
                                ($(".bubble p span").css("font-size", "12px"),
                                setTimeout(function () {
                                    $("#top-player-bubble p span").text(
                                        "Happy Valentine's day Lisa! ❤️️️️️️️❤️"
                                    ),
                                        $("#top-player-bubble").fadeIn();
                                }, 1500),
                                setTimeout(function () {
                                    $("#right-player-bubble p span")
                                        .text("😍️️")
                                        .css("font-size", "40px"),
                                        $("#right-player-bubble").fadeIn();
                                }, 3500),
                                setTimeout(function () {
                                    $("#left-player-bubble p span").text(
                                        "Enough already, let's play " + e + "!"
                                    ),
                                        $("#left-player-bubble").fadeIn();
                                }, 5500),
                                setTimeout(function () {
                                    $(".bubble").hide(),
                                        $(".bubble p span").css(
                                            "font-size",
                                            ""
                                        );
                                }, 9e3));
                        } catch (e) {
                            b("ValentinesError", e.toString(), 0, "", "", 1);
                        }
                    },
                    getFaceUrl: function (e, t) {
                        if (e.toString().match(/^\d\d?$/))
                            return t
                                ? "/shared/images/svg/face-" + e + "-sad.svg"
                                : "/shared/images/svg/face-" + e + ".svg";
                        var a = "https://cardgames.io/lambda/faces/" + e;
                        return t && (a += "/sad"), a;
                    },
                    getHairClass: function (e) {
                        return e.length <= 2
                            ? "hair-" + e
                            : "hair-" + e.charAt(2);
                    },
                    siteSettings: k,
                    settings: C,
                    browser: _,
                    preloadImage: function (e) {
                        if (!s[e]) {
                            var t = new Image();
                            (t.src = e),
                                (t.onload = function () {}),
                                (t.onerror = function () {}),
                                (s[e] = t);
                        }
                    },
                    trackEvent: b,
                    reloadPage: N,
                    deleteCake: v,
                    showConfetti: function () {
                        k.confetti &&
                            Z(
                                "/shared/effects/" +
                                    siteVersion +
                                    "/confetti.min.js",
                                function () {
                                    var e = $("<div>", {
                                            class: "confetti-container",
                                        }).appendTo("#play-page"),
                                        t =
                                            h() ||
                                            navigator.userAgent.match(/iPhone/);
                                    (window.confettiEffect = new Confetti(
                                        e.get(0),
                                        t ? 250 : 800
                                    )),
                                        confettiEffect.start(),
                                        $("body").addClass("confetti"),
                                        $(".confetti-container").on("click", q);
                                }
                            );
                    },
                    removeConfetti: q,
                    logError: O,
                    mobileMenu: L,
                    isMobileLookActive: h,
                    GDPR_CONSENT_COOKIE: f,
                    isDev: function () {
                        return window.location.href.includes(
                            "dev.cardgames.io"
                        );
                    },
                };
            },
            {
                "./api": 1,
                "./gamecontrol": 7,
                "./helper-functions": 8,
            },
        ],
        20: [
            function (e, t, a) {
                "use strict";
                var p = e("../shared/helper-functions").ArrayUtils,
                    n = (function () {
                        function e(e) {
                            (this.name = e), (this.hand = []);
                        }
                        var t = e.prototype;
                        return (
                            (t.toString = function () {
                                return this.name;
                            }),
                            (t.notifyPlay = function (e, t, a) {
                                if (
                                    (0 < e.length &&
                                        e[0].suit !== a.suit &&
                                        (this.playerInfo[t.name][
                                            e[0].suit
                                        ] = !1),
                                    p.remove(this.remaining[a.suit], a.rank),
                                    0 === this.remaining[a.suit].length)
                                )
                                    for (var n in this.playerInfo)
                                        this.playerInfo[n][a.suit] = !1;
                            }),
                            (t.removeLowerAdjacentCards = function (e) {
                                e.sort(function (e, t) {
                                    var a = {
                                        h: 0,
                                        s: 1,
                                        d: 2,
                                        c: 3,
                                    };
                                    return e.suit !== t.suit
                                        ? a[e.suit] - a[t.suit]
                                        : e.rank - t.rank;
                                });
                                for (var t = [], a = 0; a < e.length; a++) {
                                    var n = e[a],
                                        i = e[a + 1];
                                    (i &&
                                        n.suit === i.suit &&
                                        n.rank === i.rank - 1) ||
                                        t.push(n);
                                }
                                return t;
                            }),
                            (t.play = function (e) {
                                (e = this.removeLowerAdjacentCards(e)),
                                    0 === this.game.pile.length
                                        ? this.playPos1(e)
                                        : 1 === this.game.pile.length
                                        ? this.playPos2(e)
                                        : 2 === this.game.pile.length
                                        ? this.playPos3(e)
                                        : 3 === this.game.pile.length &&
                                          this.playPos4(e);
                            }),
                            (t.playPos1 = function (e) {
                                var t = this.game.players.indexOf(this),
                                    a = this.game.players[(t + 1) % 4],
                                    n = this.game.players[(t + 3) % 4],
                                    i = this.partner,
                                    r = this.game.trump,
                                    s = e,
                                    o = Array.isArray(s),
                                    l = 0;
                                for (s = o ? s : s[Symbol.iterator](); ; ) {
                                    var d;
                                    if (o) {
                                        if (l >= s.length) break;
                                        d = s[l++];
                                    } else {
                                        if ((l = s.next()).done) break;
                                        d = l.value;
                                    }
                                    var c = d;
                                    c.goodness = c.rank;
                                    var u = this.remaining[c.suit],
                                        h = Array.isArray(u),
                                        p = 0;
                                    for (u = h ? u : u[Symbol.iterator](); ; ) {
                                        var m;
                                        if (h) {
                                            if (p >= u.length) break;
                                            m = u[p++];
                                        } else {
                                            if ((p = u.next()).done) break;
                                            m = p.value;
                                        }
                                        m > c.rank && c.goodness--;
                                    }
                                    !1 === this.playerInfo[i.name][c.suit] &&
                                        c.goodness < 0 &&
                                        (c.goodness -= 1e3);
                                    var f = this.playerInfo[a.name],
                                        g = this.playerInfo[n.name];
                                    !1 === f[c.suit] &&
                                        !1 === f[r] &&
                                        !1 === g[c.suit] &&
                                        !1 === g[r] &&
                                        (c.goodness += 1e3),
                                        !1 === f[c.suit] &&
                                            ((c.goodness += 2),
                                            !1 === f[r] && (c.goodness += 3)),
                                        !1 === g[c.suit] &&
                                            ((c.goodness += 2),
                                            !1 === g[r] && (c.goodness += 3));
                                    if (13 === c.rank) {
                                        var y = !1,
                                            v = this.hand,
                                            b = Array.isArray(v),
                                            w = 0;
                                        for (
                                            v = b ? v : v[Symbol.iterator]();
                                            ;

                                        ) {
                                            var C;
                                            if (b) {
                                                if (w >= v.length) break;
                                                C = v[w++];
                                            } else {
                                                if ((w = v.next()).done) break;
                                                C = w.value;
                                            }
                                            var k = C;
                                            k.suit === c.suit &&
                                                14 === k.rank &&
                                                (y = !0);
                                        }
                                        var T = this.remaining[c.suit].includes(
                                            14
                                        );
                                        !y && T && (c.goodness = -10);
                                    }
                                }
                                e.sort(function (e, t) {
                                    return e.goodness - t.goodness;
                                });
                                var S = e[e.length - 1];
                                this.playCard(S);
                            }),
                            (t.playPos2 = function (e) {
                                this.sortPlayable(e);
                                var t = e[0],
                                    a = e[e.length - 1];
                                this.canWinCard(a, this.game.pile[0])
                                    ? this.playCard(a)
                                    : this.playCard(t);
                            }),
                            (t.sortPlayable = function (e) {
                                var a = this.game.trump;
                                e.sort(function (e, t) {
                                    return e.suit !== a && t.suit === a
                                        ? -1
                                        : e.suit === a && t.suit !== a
                                        ? 1
                                        : e.rank - t.rank;
                                });
                            }),
                            (t.playPos3 = function (e) {
                                this.sortPlayable(e);
                                var t,
                                    a = e[0],
                                    n = e[e.length - 1],
                                    i = this.getBestCard(),
                                    r = e,
                                    s = Array.isArray(r),
                                    o = 0;
                                for (r = s ? r : r[Symbol.iterator](); ; ) {
                                    var l;
                                    if (s) {
                                        if (o >= r.length) break;
                                        l = r[o++];
                                    } else {
                                        if ((o = r.next()).done) break;
                                        l = o.value;
                                    }
                                    var d = l;
                                    if (this.canWinCard(d, i)) {
                                        t = d;
                                        break;
                                    }
                                }
                                t
                                    ? i === this.game.pile[0] && 10 <= i.rank
                                        ? this.playCard(a)
                                        : i.suit !== t.suit
                                        ? this.playCard(t)
                                        : this.playCard(n)
                                    : this.playCard(a);
                            }),
                            (t.playPos4 = function (e) {
                                this.sortPlayable(e);
                                var t,
                                    a = e[0],
                                    n = this.getBestCard(),
                                    i = e,
                                    r = Array.isArray(i),
                                    s = 0;
                                for (i = r ? i : i[Symbol.iterator](); ; ) {
                                    var o;
                                    if (r) {
                                        if (s >= i.length) break;
                                        o = i[s++];
                                    } else {
                                        if ((s = i.next()).done) break;
                                        o = s.value;
                                    }
                                    var l = o;
                                    if (this.canWinCard(l, n)) {
                                        t = l;
                                        break;
                                    }
                                }
                                n === this.game.pile[1] || !!!t
                                    ? this.playCard(a)
                                    : this.playCard(t);
                            }),
                            (t.playCard = function (e) {
                                this.game.playCards(this, [e]);
                            }),
                            (t.canWinCard = function (e, t) {
                                var a = this.game.trump;
                                return (
                                    (e.suit === t.suit && e.rank > t.rank) ||
                                    (e.suit === a && t.suit != a)
                                );
                            }),
                            (t.getBestCard = function () {
                                for (
                                    var e = this.game.pile[0], t = 1;
                                    t < this.game.pile.length;
                                    t++
                                ) {
                                    var a = this.game.pile[t];
                                    this.canWinCard(a, e) && (e = a);
                                }
                                return e;
                            }),
                            (t.beforeGameStart = function () {
                                this.remaining = {};
                                for (
                                    var e = 0, t = ["h", "s", "d", "c"];
                                    e < t.length;
                                    e++
                                ) {
                                    var a = t[e];
                                    this.remaining[a] = [
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12,
                                        13,
                                        14,
                                    ];
                                }
                                var n = this.hand,
                                    i = Array.isArray(n),
                                    r = 0;
                                for (n = i ? n : n[Symbol.iterator](); ; ) {
                                    var s;
                                    if (i) {
                                        if (r >= n.length) break;
                                        s = n[r++];
                                    } else {
                                        if ((r = n.next()).done) break;
                                        s = r.value;
                                    }
                                    var o = s;
                                    p.remove(this.remaining[o.suit], o.rank);
                                }
                                this.playerInfo = {};
                                var l = this.game.players,
                                    d = Array.isArray(l),
                                    c = 0;
                                for (l = d ? l : l[Symbol.iterator](); ; ) {
                                    var u;
                                    if (d) {
                                        if (c >= l.length) break;
                                        u = l[c++];
                                    } else {
                                        if ((c = l.next()).done) break;
                                        u = c.value;
                                    }
                                    var h = u;
                                    this.playerInfo[h.name] = {
                                        h: !0,
                                        s: !0,
                                        d: !0,
                                        c: !0,
                                    };
                                }
                            }),
                            e
                        );
                    })();
                t.exports = n;
            },
            {
                "../shared/helper-functions": 8,
            },
        ],
        21: [
            function (e, t, a) {
                "use strict";
                var n = e("../shared/cardgames/cardgame"),
                    i = (function (s) {
                        function e() {
                            var e;
                            return (
                                ((e = s.call(this) || this).cardCount = 13),
                                (e.sortType = "suit"),
                                (e.canSelectCards = !1),
                                (e.defaultPlayerCount = 4),
                                (e.trump = "h"),
                                (e.trumpOrder = ["h", "s", "d", "c", ""]),
                                (e.handNr = 1),
                                (e.canSortDesc = !1),
                                (e.previousGameScores = null),
                                (e.renderers.taketrick = e.makeRenderFunc(
                                    "taketrick - @player.name takes the trick"
                                )),
                                e
                            );
                        }
                        !(function (e, t) {
                            (e.prototype = Object.create(t.prototype)),
                                ((e.prototype.constructor = e).__proto__ = t);
                        })(e, s);
                        var t = e.prototype;
                        return (
                            (t.getTrumpSuit = function (e) {
                                return this.trumpOrder[
                                    (e - 1) % this.trumpOrder.length
                                ];
                            }),
                            (t.setHandNr = function (e) {
                                (this.handNr = e),
                                    (this.trump = this.getTrumpSuit(e));
                            }),
                            (t.toString = function () {
                                return "Whist";
                            }),
                            (t.canPlayCard = function (e, t) {
                                if (0 === this.pile.length) return !0;
                                var a = this.pile[0].suit;
                                return (
                                    t.suit === a ||
                                    !e.hand.some(function (e) {
                                        return e.suit === a;
                                    })
                                );
                            }),
                            (t.afterDealing = function () {
                                var e = this.players,
                                    t = Array.isArray(e),
                                    a = 0;
                                for (e = t ? e : e[Symbol.iterator](); ; ) {
                                    var n;
                                    if (t) {
                                        if (a >= e.length) break;
                                        n = e[a++];
                                    } else {
                                        if ((a = e.next()).done) break;
                                        n = a.value;
                                    }
                                    var i = n;
                                    if (
                                        "bottom-player" === i.id &&
                                        !this.handSorted
                                    )
                                        return (
                                            (this.handSorted = !0),
                                            this.sortHand(i, this.afterDealing)
                                        );
                                    i.tricks = [];
                                }
                                for (var r = 0; r < this.players.length; r++)
                                    this.players[r].partner = this.players[
                                        (r + 2) % this.players.length
                                    ];
                                var s = this.players,
                                    o = Array.isArray(s),
                                    l = 0;
                                for (s = o ? s : s[Symbol.iterator](); ; ) {
                                    var d;
                                    if (o) {
                                        if (l >= s.length) break;
                                        d = s[l++];
                                    } else {
                                        if ((l = s.next()).done) break;
                                        d = l.value;
                                    }
                                    var c = d;
                                    c.beforeGameStart && c.beforeGameStart();
                                }
                                (this.currentPlayerIndex = this.pickFirstPlayerIndex()),
                                    this.renderEvent(
                                        "start",
                                        this.currentPlayerTurn
                                    );
                            }),
                            (t.playCards = function (e, t) {
                                t[0].playedBy = e;
                                var a = this.players,
                                    n = Array.isArray(a),
                                    i = 0;
                                for (a = n ? a : a[Symbol.iterator](); ; ) {
                                    var r;
                                    if (n) {
                                        if (i >= a.length) break;
                                        r = a[i++];
                                    } else {
                                        if ((i = a.next()).done) break;
                                        r = i.value;
                                    }
                                    r.notifyPlay(this.pile, e, t[0]);
                                }
                                s.prototype.playCards.call(this, e, t);
                            }),
                            (t.calculateScore = function () {
                                function e(e, t) {
                                    var a = {};
                                    return (
                                        (a.points = Math.max(
                                            0,
                                            e.tricks.length +
                                                t.tricks.length -
                                                6
                                        )),
                                        (a.totalPoints =
                                            (e.totalPoints || 0) + a.points),
                                        (a.players = [e, t]),
                                        a
                                    );
                                }
                                var t = e(this.players[0], this.players[2]),
                                    a = e(this.players[1], this.players[3]);
                                if (t.totalPoints < 7 && a.totalPoints < 7)
                                    return this.renderEvent(
                                        "win",
                                        function () {},
                                        {
                                            team1: t,
                                            team2: a,
                                        }
                                    );
                                if (7 <= t.totalPoints)
                                    return this.renderEvent(
                                        "win",
                                        function () {},
                                        {
                                            team1: t,
                                            team2: a,
                                            winners: t.players,
                                        }
                                    );
                                if (7 <= a.totalPoints)
                                    return this.renderEvent(
                                        "win",
                                        function () {},
                                        {
                                            team1: t,
                                            team2: a,
                                            winners: a.players,
                                        }
                                    );
                                throw "Error in calc score";
                            }),
                            (t.afterPlayCards = function () {
                                if (this.pile.length < this.players.length)
                                    this.nextPlayerTurn();
                                else {
                                    for (
                                        var e = 0,
                                            t = this.pile[0],
                                            a =
                                                (this.currentPlayerIndex + 1) %
                                                this.players.length,
                                            n = 1;
                                        n < this.pile.length;
                                        n++
                                    ) {
                                        var i = this.pile[n];
                                        t.suit !== this.trump &&
                                        i.suit === this.trump
                                            ? ((t = i), (e = n))
                                            : i.suit === t.suit &&
                                              i.rank > t.rank &&
                                              ((t = i), (e = n));
                                    }
                                    var r = (a + e) % this.players.length,
                                        s = 0 === this.players[0].hand.length;
                                    this.currentPlayerIndex = r;
                                    var o = this.pile.slice(0);
                                    this.currentPlayer().tricks.push(o),
                                        (this.pile = []);
                                    var l = s
                                        ? this.calculateScore
                                        : this.currentPlayerTurn;
                                    this.renderEvent("taketrick", l, {
                                        trick: o,
                                    });
                                }
                            }),
                            e
                        );
                    })(n);
                t.exports = i;
            },
            {
                "../shared/cardgames/cardgame": 3,
            },
        ],
        22: [
            function (e, t, a) {
                "use strict";
                var n = e("../shared/multiplayer/multiplayer-util")
                        .AutoPlayTimer,
                    i = e("../shared/helper-functions").captainsLog,
                    r = (function () {
                        function e(e) {
                            var t = this;
                            (this.name = e),
                                (this.hand = []),
                                (this.timer = new n(function (e) {
                                    return t.game.message(e);
                                })),
                                (this.randomMovesCount = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.useCard = function (e, t) {
                                e.random
                                    ? this.randomMovesCount++
                                    : (this.randomMovesCount = 0),
                                    (t && !this.game.canSelectCards) ||
                                        (this.game.message(""),
                                        this.hand.includes(e)
                                            ? this.canPlay
                                                ? this.playable.includes(e)
                                                    ? (this.timer.stop(),
                                                      this.game.playCards(
                                                          this,
                                                          [e]
                                                      ))
                                                    : this.cannotPlayCardMessage(
                                                          e
                                                      )
                                                : this.game.message(
                                                      "It's not your turn to play!"
                                                  )
                                            : this.game.useIllegalCard(
                                                  this,
                                                  e
                                              ));
                            }),
                            (t.play = function (t) {
                                var a = this;
                                if (this.multiplayer) {
                                    var e = 25;
                                    2 < this.randomMovesCount && (e = 10),
                                        this.timer.start(e, function () {
                                            var e = t[0];
                                            (e.random = !0), a.useCard(e);
                                        });
                                }
                                this.playable = t;
                                try {
                                    localStorage.autohuman &&
                                        this.useCard(t[0]);
                                } catch (e) {
                                    i.error("autohuman failed; " + e);
                                }
                            }),
                            (t.cannotPlayCardMessage = function () {
                                var t = this.game.pile[0];
                                this.hand.some(function (e) {
                                    return e.suit === t.suit;
                                }) &&
                                    this.game.message(
                                        "The suit of the current trick is " +
                                            t.suitName +
                                            "s. You have a " +
                                            t.suitName +
                                            " so you must play it!"
                                    );
                            }),
                            (t.notifyPlay = function () {}),
                            e
                        );
                    })();
                t.exports = r;
            },
            {
                "../shared/helper-functions": 8,
                "../shared/multiplayer/multiplayer-util": 12,
            },
        ],
        23: [
            function (e, t, a) {
                "use strict";
                var r = e("../shared/helper-functions").captainsLog,
                    n = e("./whist-computer-player"),
                    i = (function (i) {
                        function e(e) {
                            var t;
                            return (
                                ((t =
                                    i.call(this, e) ||
                                    this).multiplayerMoves = []),
                                t
                            );
                        }
                        return (
                            (function (e, t) {
                                (e.prototype = Object.create(t.prototype)),
                                    ((e.prototype.constructor = e).__proto__ = t);
                            })(e, i),
                            (e.prototype.play = function (e) {
                                var t = this;
                                if (this.shouldMakeSubstituteMove())
                                    i.prototype.play.call(this, e);
                                else {
                                    this.waitStart ||
                                        (this.waitStart = new Date().getTime());
                                    var a = this.multiplayerMoves.shift();
                                    if (a)
                                        if (
                                            (r.debug(
                                                this.name +
                                                    ": Got move: " +
                                                    JSON.stringify(a)
                                            ),
                                            delete this.waitStart,
                                            "play" === a.type)
                                        ) {
                                            var n = this.hand.find(function (
                                                e
                                            ) {
                                                return (
                                                    e.shortName === a.cards[0]
                                                );
                                            });
                                            n
                                                ? ((n.random = a.random),
                                                  this.game.playCards(this, [
                                                      n,
                                                  ]))
                                                : r.error(
                                                      "Player " +
                                                          this.id +
                                                          " did not find card " +
                                                          a.cards +
                                                          ", hand was: " +
                                                          this.hand
                                                  );
                                        } else
                                            r.error(
                                                this.id +
                                                    " got unexpected move while waiting for move of type 'play'. Got move: " +
                                                    JSON.stringify(a)
                                            );
                                    else
                                        setTimeout(function () {
                                            return t.play(e);
                                        }, 500);
                                }
                            }),
                            e
                        );
                    })(n);
                t.exports = i;
            },
            {
                "../shared/helper-functions": 8,
                "./whist-computer-player": 20,
            },
        ],
        24: [
            function (e, t, a) {
                "use strict";
                var n = e("../shared/cardgames/render"),
                    i = n.timing,
                    r = n.Renderer,
                    s = n.dimensions,
                    S = e("../shared/util"),
                    A = e("../shared/game").HTML_CARD_SUITS,
                    o = s,
                    l = (function (t) {
                        function e() {
                            var e;
                            return (
                                ((e = t.call(this) || this).playType = "trick"),
                                e
                            );
                        }
                        !(function (e, t) {
                            (e.prototype = Object.create(t.prototype)),
                                ((e.prototype.constructor = e).__proto__ = t);
                        })(e, t);
                        var a = e.prototype;
                        return (
                            (a.dealCard = function (e) {
                                (i.ANIMATION_SPEED = 100),
                                    t.prototype.dealCard.call(this, e),
                                    (i.ANIMATION_SPEED = 500);
                            }),
                            (a.startNextRound = function (e) {
                                $("#start-new-game").show(),
                                    $("#start-new-game").text(
                                        "Play another hand"
                                    ),
                                    this.clearTable(e);
                            }),
                            (a.showScore = function (e) {
                                $("#messageBox").hide();
                                var t = e.results.length / 2,
                                    a = e.game.players;
                                if (
                                    (e.team1.points >= e.team2.points
                                        ? $("#result-box h3").text(
                                              a[0].name +
                                                  " and " +
                                                  a[2].name +
                                                  " win hand " +
                                                  t
                                          )
                                        : $("#result-box h3").text(
                                              a[1].name +
                                                  " and " +
                                                  a[3].name +
                                                  " win hand " +
                                                  t
                                          ),
                                    S.qs.genrows)
                                )
                                    for (var n = 0; n < S.qs.genrows; n++)
                                        e.results.push(1, 2);
                                var i = $("#play-page").height() - 60 - 60 - 20;
                                e.winners && (i -= 80);
                                var r = Math.floor(i / 30);
                                r -= 2;
                                var s,
                                    o = e.results.length / 2,
                                    l = 1,
                                    d = 0,
                                    c = 0;
                                if (r < o) {
                                    var u = o - r + 1;
                                    l = 1 + u;
                                    for (var h = 0; h < 2 * u; h += 2)
                                        (d += e.results[h]),
                                            (c += e.results[h + 1]);
                                    var p =
                                        '<tr><td class="handColumn">1 - ' +
                                        (l - 1) +
                                        "</td>";
                                    (p +=
                                        "<td>" + d + "</td><td>" + c + "</td>"),
                                        (p +=
                                            '<td class="winnerColumn"><div class="no-winner">--</div></td></tr>'),
                                        (p = $(p)).addClass("remove-restart"),
                                        $(".result-table table").append(p);
                                }
                                for (
                                    var m = 2 * (l - 1);
                                    m < e.results.length;
                                    m += 2
                                ) {
                                    var f = e.results[m],
                                        g = e.results[m + 1];
                                    (d += f), (c += g);
                                    var y = g < f,
                                        v = m / 2 + 1,
                                        b = e.game.getTrumpSuit(v);
                                    s = $("<tr />").addClass("remove-restart");
                                    var w = $('<td class="handColumn"/>').text(
                                            v
                                        ),
                                        C = $("<span/>")
                                            .html(A[b])
                                            .css(
                                                "color",
                                                "h" == b || "d" == b
                                                    ? "red"
                                                    : "black"
                                            );
                                    $(C).prependTo(w),
                                        $(w).appendTo(s),
                                        $("<td/>")
                                            .text(f)
                                            .css(
                                                "font-weight",
                                                y ? "bold" : "normal"
                                            )
                                            .appendTo(s),
                                        $("<td/>")
                                            .text(g)
                                            .css(
                                                "font-weight",
                                                y ? "normal" : "bold"
                                            )
                                            .appendTo(s);
                                    var k = $(
                                        '<td class="winnerColumn"/>'
                                    ).html("<span></span><span></span>");
                                    k.appendTo(s),
                                        y
                                            ? ($(k[0].childNodes[0]).addClass(
                                                  "face-thumb face-bottom-player"
                                              ),
                                              $(k[0].childNodes[1]).addClass(
                                                  "face-thumb face-top-player"
                                              ))
                                            : ($(k[0].childNodes[0]).addClass(
                                                  "face-thumb face-left-player"
                                              ),
                                              $(k[0].childNodes[1]).addClass(
                                                  "face-thumb face-right-player"
                                              )),
                                        $(".result-table table").append(s);
                                }
                                (s = $("<tr />")
                                    .addClass("thick-top")
                                    .addClass("remove-restart")),
                                    $('<td class="handColumn"/>')
                                        .text("Totals")
                                        .appendTo(s),
                                    $("<td/>")
                                        .text(d)
                                        .css(
                                            "font-weight",
                                            c <= d ? "bold" : "normal"
                                        )
                                        .appendTo(s),
                                    $("<td/>")
                                        .text(c)
                                        .css(
                                            "font-weight",
                                            d <= c ? "bold" : "normal"
                                        )
                                        .appendTo(s);
                                var T = $('<td class="winnerColumn"/>');
                                $("<span></span>").appendTo(T),
                                    $("<span></span>").appendTo(T),
                                    c <= d &&
                                        ($(T[0].childNodes[0]).addClass(
                                            "face-thumb face-bottom-player"
                                        ),
                                        $(T[0].childNodes[1]).addClass(
                                            "face-thumb face-top-player"
                                        )),
                                    d <= c &&
                                        ($(T[0].childNodes[0]).addClass(
                                            "face-thumb face-left-player"
                                        ),
                                        $(T[0].childNodes[1]).addClass(
                                            "face-thumb face-right-player"
                                        )),
                                    $(T).appendTo(s),
                                    $(".result-table table").append(s),
                                    this.updateInlineScores({
                                        scores: [d, c],
                                    }),
                                    e.winners &&
                                        ($("#start-new-game").text(
                                            "Start a new game"
                                        ),
                                        $("#result-box h3").text(
                                            e.winners[0].name +
                                                " and " +
                                                e.winners[1].name +
                                                " win the game!"
                                        ),
                                        $("#winner1")
                                            .removeClass()
                                            .addClass(
                                                "face-small face-" +
                                                    e.winners[0].id
                                            ),
                                        $("#winner2")
                                            .removeClass()
                                            .addClass(
                                                "face-small face-" +
                                                    e.winners[1].id
                                            ),
                                        $("#team-win").show()),
                                    this.showResults(),
                                    e.callback();
                            }),
                            (a.updateInlineScores = function (e) {
                                var t, a;
                                (t = e.scores[0]),
                                    (a = e.scores[1]),
                                    $("#human-team-score").text(t),
                                    $("#computer-team-score").text(a);
                            }),
                            (a.setTrump = function (e, t) {
                                if (S.isMobileLookActive()) {
                                    var a =
                                            12 *
                                                o.LEFT_PLAYER_CARD_SIZE
                                                    .padding +
                                            o.LEFT_PLAYER_CARD_SIZE.width,
                                        n = Math.round(
                                            o.SIDE_PLAYER_VERTICAL_LINE - a / 2
                                        );
                                    $("#trump").css({
                                        height: a,
                                        top: n,
                                    }),
                                        $("#trump span").css(
                                            "line-height",
                                            a + "px"
                                        );
                                } else
                                    $("#trump").css({
                                        height: "165px",
                                        top: "185px",
                                    }),
                                        $("#trump span").css(
                                            "line-height",
                                            "170px"
                                        );
                                $("#trump")
                                    .removeClass()
                                    .addClass(e || "none"),
                                    "" === e
                                        ? $("#show-trump").html("No trump")
                                        : $("#show-trump").html(
                                              'Trump is <span class="' +
                                                  e +
                                                  '">' +
                                                  A[e] +
                                                  "</span>"
                                          ),
                                    t && $("#trump, #show-trump").fadeIn();
                            }),
                            (a.resizeCustom = function (e) {
                                this.setTrump(e.game.trump);
                            }),
                            e
                        );
                    })(r);
                t.exports = l;
            },
            {
                "../shared/cardgames/render": 4,
                "../shared/game": 6,
                "../shared/util": 19,
            },
        ],
        25: [
            function (e, t, a) {
                "use strict";
                var l = e("../shared/util"),
                    d = e("../shared/game").makePlayersSad,
                    c = e("../shared/statistics"),
                    n = e("../shared/cardgames/webcardgame"),
                    i = e("./whist-game"),
                    r = e("./whist-human-player"),
                    s = e("./whist-computer-player"),
                    o = e("./whist-remote-player"),
                    u = e("./whist-render"),
                    h = e("../shared/gamecontrol");
                (window.gc = h),
                    new ((function (e) {
                        function t() {
                            return e.apply(this, arguments) || this;
                        }
                        !(function (e, t) {
                            (e.prototype = Object.create(t.prototype)),
                                ((e.prototype.constructor = e).__proto__ = t);
                        })(t, e);
                        var a = t.prototype;
                        return (
                            (a.setupStartHandler = function () {
                                var a = this;
                                this.game.setEventRenderer("start", function (
                                    e
                                ) {
                                    if (a.results) {
                                        (a.game.players[0].totalPoints = 0),
                                            (a.game.players[1].totalPoints = 0),
                                            (a.game.players[2].totalPoints = 0);
                                        for (
                                            var t = (a.game.players[3].totalPoints = 0);
                                            t < a.results.length;
                                            t += 2
                                        )
                                            (a.game.players[0].totalPoints +=
                                                a.results[t]),
                                                (a.game.players[2].totalPoints +=
                                                    a.results[t]),
                                                (a.game.players[1].totalPoints +=
                                                    a.results[t + 1]),
                                                (a.game.players[3].totalPoints +=
                                                    a.results[t + 1]);
                                    }
                                    a.bindCardEventHandlers(),
                                        a.renderer.setTrump(e.game.trump, !0),
                                        e.callback();
                                });
                            }),
                            (a.statsRegister = function (e, t, a, n, i, r) {
                                function s(e, t, a, n) {
                                    (e.stats = {}),
                                        (e.stats.result = t ? "win" : "lose"),
                                        (e.stats.score = a),
                                        r &&
                                            ((e.stats.tournamentScore = n),
                                            (e.stats.tournamentResult = t
                                                ? "win"
                                                : "lose")),
                                        (e.stats.trickCount = e.tricks.length);
                                }
                                for (var o = 0; o < e.length; o++) {
                                    var l = e[o];
                                    0 === o || 2 === o
                                        ? s(l, a < t, t, n)
                                        : s(l, t < a, a, i);
                                }
                            }),
                            (a.extraSetup = function () {
                                var r = this,
                                    t = !1,
                                    a = this.renderer;
                                this.game.setEventRenderer(
                                    "taketrick",
                                    function (e) {
                                        return a.takeTrick(e);
                                    }
                                ),
                                    this.game.setEventRenderer(
                                        "startagain",
                                        function (e) {
                                            var t = r.results.length / 2 + 1;
                                            r.game.setHandNr(t),
                                                r.updateInlineScores(),
                                                a.startNextRound(e);
                                        }
                                    ),
                                    l.settings.showScorecard &&
                                        $("body").addClass("show-scorecard"),
                                    l.settings.addListener(
                                        "showScorecard",
                                        function (e) {
                                            e.value
                                                ? $("body").addClass(
                                                      "show-scorecard"
                                                  )
                                                : $("body").removeClass(
                                                      "show-scorecard"
                                                  );
                                        }
                                    ),
                                    $(document).on(
                                        "click touchstart",
                                        "#show-scorecard-button",
                                        function (e) {
                                            console.log(t + " AAAAAAAAAAAAAA?"),
                                                e.preventDefault(),
                                                e.stopPropagation(),
                                                t ||
                                                    ((t = !0),
                                                    $(
                                                        "#inline-score-wrapper"
                                                    ).addClass(
                                                        "mobile-visible"
                                                    ),
                                                    $(
                                                        "#show-scorecard-button small"
                                                    ).text("Hide scorecard"));
                                        }
                                    ),
                                    $(document).on(
                                        "click touchstart",
                                        function (e) {
                                            t &&
                                                ((t = !1),
                                                $(
                                                    "#inline-score-wrapper"
                                                ).removeClass("mobile-visible"),
                                                $(
                                                    "#show-scorecard-button small"
                                                ).text("Show scorecard"));
                                        }
                                    ),
                                    this.game.setEventRenderer("win", function (
                                        e
                                    ) {
                                        r.results.push(e.team1.points),
                                            r.results.push(e.team2.points),
                                            r.saveLastDealer();
                                        var t = e.team1.points > e.team2.points;
                                        if (r.multiplayerTable) {
                                            var a = e.game.players,
                                                n =
                                                    e.team1.points >
                                                    e.team2.points
                                                        ? [a[0], a[2]]
                                                        : [a[1], a[3]],
                                                i = {
                                                    finished: !!e.winners,
                                                    winners: n.map(function (
                                                        e
                                                    ) {
                                                        return e.multiplayerId;
                                                    }),
                                                };
                                            r.client.sendResult(i),
                                                i.finished &&
                                                    $(
                                                        "#start-new-game"
                                                    ).removeAttr("disabled");
                                        } else
                                            l.trackEvent(
                                                "Win",
                                                t
                                                    ? "Human Team"
                                                    : "Computer Team"
                                            ),
                                                l.trackEvent(
                                                    "Score",
                                                    "Human Team",
                                                    e.team1.points
                                                ),
                                                l.trackEvent(
                                                    "Score",
                                                    "Computer Team",
                                                    e.team2.points
                                                );
                                        l.trackEvent("FinishGame"),
                                            h.finishGame(),
                                            e.winners &&
                                                !r.multiplayerTable &&
                                                l.trackEvent(
                                                    "WinTournament",
                                                    t
                                                        ? "Human Team"
                                                        : "Computer Team"
                                                ),
                                            d(
                                                t
                                                    ? [
                                                          "top-player",
                                                          "bottom-player",
                                                      ]
                                                    : [
                                                          "left-player",
                                                          "right-player",
                                                      ]
                                            ),
                                            r.statsRegister(
                                                e.game.players,
                                                e.team1.points,
                                                e.team2.points,
                                                e.team1.totalPoints,
                                                e.team2.totalPoints,
                                                !!e.winners
                                            ),
                                            c.finishGame(e.game.players),
                                            (e.results = r.results),
                                            r.renderer.showScore(e),
                                            e.winners
                                                ? ((r.results = []),
                                                  l.deleteCake("results"))
                                                : l.cake(
                                                      "results",
                                                      "" + r.results
                                                  );
                                    }),
                                    (this.results = []);
                                var e = l.cake("results");
                                e
                                    ? ((this.results = e
                                          .split(",")
                                          .map(function (e) {
                                              return parseFloat(e);
                                          })),
                                      this.updateInlineScores())
                                    : (l.valentines("Whist"),
                                      this.renderer.updateInlineScores({
                                          scores: [0, 0],
                                      }));
                                var n = this.results.length / 2 + 1;
                                this.game.setHandNr(n);
                                var i = l.cake("lastdealerindex");
                                i &&
                                    i.match(/^[0-3]$/) &&
                                    (this.game.lastDealerIndex = parseFloat(i));
                                var s = "Hand " + n + ", ",
                                    o = this.game.trump;
                                (s +=
                                    "h" == o
                                        ? "hearts are trump."
                                        : "s" == o
                                        ? "spades are trump."
                                        : "d" == o
                                        ? "diamonds are trump."
                                        : "c" == o
                                        ? "clubs are trump."
                                        : "no trump."),
                                    this.game.message(s),
                                    this.loadLastDealer();
                            }),
                            (a.updateInlineScores = function () {
                                for (
                                    var e, t, a = (t = e = 0);
                                    a < this.results.length;
                                    a += 2
                                )
                                    (e += this.results[a]),
                                        (t += this.results[a + 1]);
                                this.renderer.updateInlineScores({
                                    scores: [e, t],
                                });
                            }),
                            (a.restartWithoutReload = function () {
                                e.prototype.restartWithoutReload.call(this),
                                    this.updateInlineScores();
                            }),
                            t
                        );
                    })(n))(new i()).init(l.qs.autoplay ? s : r, s, new u(), o);
            },
            {
                "../shared/cardgames/webcardgame": 5,
                "../shared/game": 6,
                "../shared/gamecontrol": 7,
                "../shared/statistics": 17,
                "../shared/util": 19,
                "./whist-computer-player": 20,
                "./whist-game": 21,
                "./whist-human-player": 22,
                "./whist-remote-player": 23,
                "./whist-render": 24,
            },
        ],
    },
    {},
    [25]
);
//# sourceMappingURL=maps/whist.min.js.map
