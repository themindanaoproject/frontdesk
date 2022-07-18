<?php module('Header'); ?>
<div xpatch="@CardSinglePage" class="card-page-main-wrapper">
    <div class="flex ac card-page-main-mobile-ctrl">
        <div class="sidebar-module-main w-12">
            <?php module('Sidebar'); ?>
        </div>
        <div class="card-page-main w-12" style="background-color: #f9faff; min-height: 100vh;">
            <div class="card-cover-photo w-12 h-12">
                <div xif="Card.images.cover.src==null" class="w-12 h-12">
                    <div class="w-12 h-12" style="background: url(https://cdn.shopify.com/s/files/1/0560/7466/6159/files/geometric-leaves.webp?v=1658062976)">
                        <div class="flex ac jc h-12">
                            <div class="wrapper-9 flex jc ac flex-col">
                                <div class="subtext fw-3 text-6">{{Card.name}} has no cover photo yet.</div>
                                <div class="mg-top-6">
                                    <button class="button border-0 primary-bg clickable" type="button" name="button">
                                        <div class="flex ac pd-top-3 pd-bottom-3 pd-left-5 pd-right-5">
                                            <div class="subtext fw-4 text-6 mg-right-3">Add Photo</div>
                                            <div class="">
                                                <svg class="mg-top-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: #e3e3e3"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex jc" style="margin-top: -30px;">
                <div class="wrapper-11 bg-white">
                    <div class="pd-top-10 pd-left-10 pd-right-10">
                        <div class="flex ac">
                            <div class="Card.traceback.region!==null">
                                <div class="subtext text-6 fw-3">{{UtilSvc.text.clean(Card.traceback.region)}}</div>
                            </div>
                        </div>
                        <div class="mg-top-8 border-top-1 border-thin border-light pd-top-6">
                            <div class="subtext text-4 text-uppercase">{{Card._card.type}}</div>
                            <div class="primetext text-7 fw-5">
                                <span xif="Card._card.type=='town'">{{Card.name}}, {{UtilSvc.text.clean(Card.traceback.province)}}</span>
                                <span xif="Card._card.type=='city'">{{Card.name}}</span>
                                <span xif="Card._card.type=='province'">{{Card.name}}, {{UtilSvc.text.clean(Card.traceback.region)}}</span>
                                <span xif="Card._card.type=='region'">{{Card.name}}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
