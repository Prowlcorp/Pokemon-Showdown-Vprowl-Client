<?php//PROWL change

if ((substr($_SERVER['REMOTE_ADDR'],0,11) === '69.164.163.') ||
		(substr(@$_SERVER['HTTP_X_FORWARDED_FOR'],0,11) === '69.164.163.')) {
	die('website disabled');
}

/********************************************************************
 * Header
 ********************************************************************/

function ThemeHeaderTemplate() {
	global $panels;
?>
<!DOCTYPE html>
<html><head>

	<meta charset="utf-8" />

	<title><?php if ($panels->pagetitle) echo htmlspecialchars($panels->pagetitle).' - '; ?>Pok&eacute;mon Showdown</title>

<?php if ($panels->pagedescription) { ?>
	<meta name="description" content="<?php echo htmlspecialchars($panels->pagedescription); ?>" />
<?php } ?>

	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=IE8" />
	<link rel="stylesheet" href="./style/font-awesome.css" />
	<link rel="stylesheet" href="./theme/panels.css" />
	<link rel="stylesheet" href="./theme/main.css" />
	<link rel="stylesheet" href="./style/battle.css?" />
	<link rel="stylesheet" href="./style/replay.css?" />
	<link rel="stylesheet" href="./style/utilichart.css?" />

	<!-- Workarounds for IE bugs to display trees correctly. -->
	<!--[if lte IE 6]><style> li.tree { height: 1px; } </style><![endif]-->
	<!--[if IE 7]><style> li.tree { zoom: 1; } </style><![endif]-->

	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-26211653-1']);
		_gaq.push(['_setDomainName', 'pokemonshowdown.com']);//PROWL change
		_gaq.push(['_setAllowLinker', true]);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head><body>

	<div class="pfx-topbar">
		<div class="header">
			<ul class="nav">
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//pokemonshowdown.com/"><img src="//pokemonshowdown.com/images/pokemonshowdownbeta.png" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//pokemonshowdown.com/ladder/">Ladder</a></li>
				<li><a class="button nav-last" href="//pokemonshowdown.com/forums/">Forum</a></li>
			</ul>
			<ul class="nav nav-play">
				<li><a class="button greenbutton nav-first nav-last" href="http://play.pokemonshowdown.com/">Play</a></li>//PROWL change
			</ul>
			<div style="clear:both"></div>
		</div>
	</div>
<?php
}

/********************************************************************
 * Footer
 ********************************************************************/

function ThemeScriptsTemplate() {
?>
	<script src="./js/lib/jquery-1.11.0.min.js"></script>
	<script src="./js/lib/lodash.core.js"></script>
	<script src="./js/lib/backbone.js"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>//PROWL change

	<script src="./js/lib/jquery-cookie.js"></script>
	<script src="./js/lib/html-sanitizer-minified.js"></script>
	<script src="./js/battle-sound.js?"></script>
	<script src="./config/config.js?"></script>
	<script src="./js/battledata.js?"></script>
	<script src="./data/pokedex-mini.js?"></script>
	<script src="./data/pokedex-mini-bw.js?"></script>
	<script src="./data/graphics.js?"></script>
	<script src="./data/pokedex.js?"></script>
	<script src="./data/items.js?"></script>
	<script src="./data/moves.js?"></script>
	<script src="./data/abilities.js?"></script>
	<script src="./data/teambuilder-tables.js?"></script>
	<script src="./js/battle-tooltips.js?"></script>
	<script src="./js/battle.js?"></script>
	<script src="/js/replay.js?"></script>

</body></html>
<?php
}
