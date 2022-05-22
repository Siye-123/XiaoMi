$(function(){
//header and nav
    (function(){
        const $serch = $("#nav .n_search");
        const $input = $("#nav .n_search .n_s_input");
        const $search_hide = $("#nav .n_search .n_s_input .n_s_hide");
        const $one = $("#nav .n_main .n_m_one");
        const $product = $("#n_w_product");
        const $p_ul = $("#n_w_product .n_w_p_main ul");

        //search input 获取焦点
        $input.focus(function(){
            $search_hide.addClass("focus");
            $search_hide.fadeIn();
        }).blur(function(){
            $search_hide.removeClass("focus");
            $search_hide.fadeOut();
        });

        //鼠标滑动到n_m_one上，将n_w_product展示
        $one.hover(function(){
            var _index = $(this).index();
            $product.stop(true).slideDown("fast");
            $p_ul.eq(_index).show().siblings().hide();
        },function(){
            $product.hover(function(){
                $(this).stop(true).slideDown("fast");
            },function(){
                $(this).stop(true).slideUp();
            });
            $product.stop(true).slideUp();
        });
    })(); //闭包

    // (function(){
    //     let shop = $("#h_m_r_hop")
    //     let shop_hide = $("#h_m_r_s_hide")
    //     shop.hover(function(){
    //         shop_hide.stop(true).slideDown() //链式
    //     },function(){
    //         shop_hide.stop(true).slideUp()
    //     })
    // })() // js 闭包 立即执行函数
}); // jquery for ready
