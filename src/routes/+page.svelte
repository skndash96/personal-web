<script>
// @ts-nocheck

  import ProfilePic from "$lib/images/pfp.jpg";
  import AudioOTOTW from "$lib/audios/ototw.mp3";
  import { onMount } from "svelte";

  let isPlaying = false;
  let audio;
  let repos;

  onMount(async () => {
    document.getElementById("astronaut").innerHTML =
      `<defs><style>.cls-1,.cls-4,.cls-6{fill:#e1ecff;}.cls-2{isolation:isolate;}.cls-3{fill:#c7dcf9;}.cls-11,.cls-14,.cls-4,.cls-6{mix-blend-mode:multiply;}.cls-5{clip-path:url(#clip-path);}.cls-6{opacity:0.51;}.cls-7{fill:#1c3177;}.cls-11,.cls-8{fill:#ff97c9;}.cls-9{fill:#fec272;}.cls-10{fill:#fff;opacity:0.48;mix-blend-mode:soft-light;}.cls-11{opacity:0.5;}.cls-12,.cls-13,.cls-14{fill:#99adf9;}.cls-13{opacity:0.44;}.cls-14{opacity:0.64;}</style><clipPath id="clip-path"><path class="cls-1" d="M555.73,633.88s69.93.45,89.58,5.47,71.66,122.73,93.18,134S778.29,765.9,802,752s45.44-30.72,46.12-37.74-9.39-35.07-18.1-40.73-34-6.06-47.49,2.58c-19.82-54-48-132.75-73.84-143.59s-104.15-16-104.15-16Z"/></clipPath></defs><g class="cls-2"><g id="Layer_3" data-name="Layer 3"><path class="cls-3" d="M289.08,381.9s-34,13.45-39,46.12,72.26,128.37,72.26,128.37L560.6,428,485.27,295.8Z"/><path class="cls-1" d="M341.76,412.78S316.69,438.52,309,467s-8.68,79.34-7.4,98.39C339,600,486.83,571,486.83,571L629.29,403.42S605.14,357.57,592.88,345s-52-28.2-97.85-9.75C468.12,373.44,341.76,412.78,341.76,412.78Z"/><path class="cls-4" d="M330.57,426.09s55.31,17.75,117.57-6.3S521.68,328,521.68,328L495,335.26,341.76,412.78Z"/><path class="cls-1" d="M555.73,633.88s69.93.45,89.58,5.47,71.66,122.73,93.18,134S778.29,765.9,802,752s45.44-30.72,46.12-37.74-9.39-35.07-18.1-40.73-34-6.06-47.49,2.58c-19.82-54-48-132.75-73.84-143.59s-104.15-16-104.15-16Z"/><g class="cls-5"><path class="cls-6" d="M629.29,582.34s56.94,6.23,72.67,27.42,46.9,150.85,81.79,153.92c.56,42-71.7,57.17-71.7,57.17L538.84,628.39Z"/></g><path class="cls-1" d="M367.85,623.26s43,90.19,82,114.79S559.51,760.66,579,776.77s15.37,93.5,34.85,114,46.89,33.06,72.51,30.75,46.12-14.6,46.38-26.13-.77-21.53-12.81-27.68-29-11.27-29.73-18.44-14.35-116.33-20-146-49.53-70.94-106.08-91.73c-53.55-44.84-135.8-25.63-135.8-25.63Z"/><path class="cls-4" d="M380.36,647.39s49.35,2.52,93.67-16.95c-8.47-45.1-34.6-58.42-34.6-58.42l-71.58,51.24Z"/><path class="cls-1" d="M448.65,176.4C410,155.71,329,148.73,279,210.74S253.92,337.06,274.93,367c22,31.42,97.62,79.44,178.33,34.34S542.43,226.62,448.65,176.4Z"/><path class="cls-7" d="M442,214.32c34.33,8.2,56.63,56.37,45.1,102.49s-51.25,77.13-95.83,77.38S302.36,364,302.6,307.08C302.84,252.38,367.45,196.52,442,214.32Z"/><path class="cls-4" d="M343.09,574.58c44.73-20.76,11.27-68.16,55.86-78.94C457.74,504,474,501,474,501S361.53,599.78,343.09,574.58Z"/><polygon class="cls-8" points="380.36 447.8 454.8 639.35 560.11 636.84 656.45 575.86 685.15 488.74 615.46 279.66 581.63 377.54 494 447.23 380.36 447.8"/><path class="cls-1" d="M343.09,574.58c24.68-2,37.25-18.07,44.73-25.2,3.81-3.64,3.05-6.83,1.13-17.33s4.74-21.27,13.84-25.88c5,13.45,11.14,16,15.88,15.37s9.61-28.95,25.11-28.7,27.93,20.76,30,31-7.94,39.45-20.5,59.95S423,629.67,383.11,637.61s-62.57-12.43-75.64-38.18c-4.41-8.69-6-20.7-5.86-34.08C301.61,565.35,310.54,577.14,343.09,574.58Z"/><path class="cls-1" d="M639.46,351.67s4.75,15.45,1.55,21.47-7.56,11-10.76,18.71,1.54,36.77,15.63,41.76,25.75-8.07,29.47-15.63,1.66-27.41-3.85-41.25S655.63,350.59,639.46,351.67Z"/><path class="cls-9" d="M655.66,159.71l3.16,6.4a2.65,2.65,0,0,0,2,1.46l7.07,1a2.67,2.67,0,0,1,1.48,4.56l-5.11,5a2.66,2.66,0,0,0-.77,2.36l1.2,7a2.67,2.67,0,0,1-3.87,2.82l-6.33-3.32a2.65,2.65,0,0,0-2.48,0l-6.33,3.32a2.67,2.67,0,0,1-3.88-2.82l1.21-7a2.66,2.66,0,0,0-.77-2.36l-5.11-5a2.67,2.67,0,0,1,1.48-4.56l7.07-1a2.65,2.65,0,0,0,2-1.46l3.16-6.4A2.68,2.68,0,0,1,655.66,159.71Z"/><path class="cls-9" d="M317.34,837l2.65,5.37a2.2,2.2,0,0,0,1.68,1.22l5.93.86a2.24,2.24,0,0,1,1.24,3.82l-4.29,4.18a2.22,2.22,0,0,0-.64,2l1,5.9a2.25,2.25,0,0,1-3.25,2.37l-5.3-2.79a2.25,2.25,0,0,0-2.08,0L309,862.7a2.24,2.24,0,0,1-3.25-2.37l1-5.9a2.26,2.26,0,0,0-.65-2l-4.28-4.18a2.24,2.24,0,0,1,1.24-3.82l5.92-.86a2.23,2.23,0,0,0,1.69-1.22l2.65-5.37A2.24,2.24,0,0,1,317.34,837Z"/><ellipse class="cls-10" cx="408.56" cy="256.06" rx="45.63" ry="16.14" transform="translate(-45.54 93.94) rotate(-12.43)"/><path class="cls-4" d="M468.08,552.56s-28.31-25.3-33.44-25.3-18.79,20-15.71,25.3,18.9,22.66,36.27,28C460.83,569.82,468.08,552.56,468.08,552.56Z"/><polygon class="cls-11" points="494 447.23 560.11 636.84 656.45 575.86 581.63 377.54 494 447.23"/><path class="cls-4" d="M675.87,739.49a123,123,0,0,1-33,19.57c-11.21,4.32-15,13.16-11.61,29.38s5.29,41.51,12.29,48.17,31.08,3.12,43.56-12.36C683.2,793.75,675.87,739.49,675.87,739.49Z"/><path class="cls-4" d="M741.12,574.12s-14,6.1-12.67,15.83,15.63,56.76,21.27,61,22.33-3.28,22.33-3.28C754.91,599.11,741.12,574.12,741.12,574.12Z"/><path class="cls-12" d="M150.32,686.66c-11.13-23.08,25.14-47.78,56-46s43.83,30.27,54.76,40.9c22.83,22.18,22.11,43.88,6.3,53.21S165.05,717.19,150.32,686.66Z"/><path class="cls-12" d="M772.88,329.11c-9-7.88.26-44.92,21.52-53.59s47.66.81,53.3,15.67S791.33,345.25,772.88,329.11Z"/><path class="cls-12" d="M877.06,348.93c-4.61,6.57-7.68,25.28,2.05,28.61s17.09-15.92,13.67-25.94S880.14,344.54,877.06,348.93Z"/><path class="cls-13" d="M884.06,197.1c-7.26,3.42-19.23,18.12-12.43,25.85s22.73-5.33,24.74-15.72S888.91,194.82,884.06,197.1Z"/><path class="cls-13" d="M201.38,783.77c-6.28-5-24.75-9.25-28.69.26s14.82,18,25,15.26S205.56,787.11,201.38,783.77Z"/><path class="cls-14" d="M255.61,675.23c-11.17,2.1-9.37,12.09-5.79,21.14S266,708,274.89,699.73C269.12,686,255.61,675.23,255.61,675.23Z"/><path class="cls-14" d="M191.4,660.16c-8,.89-14.52,12.47-8.88,21.86s16.39,16.23,22.54,13.67,7.18-16.4,2.74-25.28S199.09,659.3,191.4,660.16Z"/><path class="cls-14" d="M822.74,283.5c-4.39,1.4-8.84,6.15-8.45,11.28s4.87,9.61,9.73,9,9-8.46,8-14.1S826.09,282.44,822.74,283.5Z"/><path class="cls-14" d="M776.25,293.5s6,6,5,12.81-11.34,6.18-11.34,6.18S771.45,300.88,776.25,293.5Z"/></g></g>`;
    document.getElementById("rocket").innerHTML =
      `<g id="layer1" opacity="0.0"><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M-526.0434,-9.285851L265.13727,-53.982655L1056.3179,-98.67946Q1104.6077,756.08936,1152.8972,1610.8582Q361.71667,1655.5559,-429.46387,1700.2537L-526.0434,-9.285851"/></g></g><g id="layer2"><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M103.8669,699.0276L103.8669,699.0276C205.15549,579.3574,307.69928,458.07495,398.90433,397.72842L398.90433,397.72842C478.83902,344.83902,549.92786,338.67435,618.58417,338.67435L618.58417,338.67435C629.14856,338.67435,639.6847,338.82068,650.14124,338.96582C654.5964,339.02768,658.2731,342.46875,658.62946,346.91L658.62964,346.91238L658.6485,347.14822L658.6483,347.14584C664.8013,423.8239,671.15515,502.61877,619.4403,599.1568L619.4403,599.1568C568.2591,694.6986,460.09265,807.56,353.32404,919.07184C350.02563,922.5168,344.55905,922.63556,341.1141,919.33716C337.66916,916.03876,337.55035,910.5722,340.84875,907.12726L340.84875,907.12726C448.3327,794.8683,554.4185,683.9592,604.2157,591.00104L604.2157,591.00104C653.3755,499.2327,647.56226,424.92032,641.4321,348.52737L641.43195,348.525L641.4131,348.28915L649.9015,356.23572C639.4215,356.09024,629.01245,355.9459,618.58417,355.9459L618.58417,355.9459C551.39154,355.9459,484.27875,361.9497,408.43484,412.13242L408.43484,412.13242C319.78552,470.78793,219.04572,589.6805,117.050156,710.1859C113.96888,713.82635,108.51984,714.27966,104.87938,711.19836C101.23892,708.11707,100.78562,702.668,103.8669,699.0276 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter">'<path d="M356.9899,911.85626L356.9899,911.85626L372.54642,1066.3131L357.69415,1061.2296L525.1962,884.96747L522.9299,892.28644L498.69366,741.4588C497.93698,736.7498,501.141,732.319,505.84998,731.5623C510.55896,730.80566,514.9898,734.0096,515.74646,738.71857L515.74646,738.71857L539.9826,889.5462C540.41,892.2058,539.57184,894.91254,537.71625,896.8652L537.71625,896.8652L370.2141,1073.1273C367.8889,1075.5741,364.35123,1076.4419,361.15765,1075.3489C357.96408,1074.2559,355.7001,1071.4022,355.36185,1068.0438L355.36185,1068.0438L339.80533,913.5871C339.3274,908.8417,342.78683,904.60736,347.53223,904.1294C352.27762,903.6514,356.51196,907.11084,356.9899,911.85626 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M111.369415,713.51227L111.369415,713.51227L-40.257088,713.3134C-43.664745,713.30896,-46.75115,711.301,-48.136116,708.1875C-49.521084,705.074,-48.945614,701.4371,-46.66705,698.90326L-46.66705,698.90326L120.13443,513.41516C121.80133,511.56152,124.18794,510.51868,126.68057,510.55472L126.68057,510.55472L273.5975,512.67896C278.3664,512.7479,282.17645,516.6698,282.1075,521.4387C282.03857,526.20764,278.1167,530.0177,273.3478,529.9487L273.3478,529.9487L126.43086,527.82446L132.977,524.964L-33.824474,710.4521L-40.234436,696.04193L111.39206,696.2408C116.16145,696.247,120.02275,700.11847,120.016495,704.8879C120.01024,709.6573,116.13881,713.5185,111.369415,713.51227 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M121.20489,705.62866L121.20489,705.62866L121.20489,705.62964L118.517265,699.36896L177.62111,755.52234C179.8012,757.5936,180.74684,760.6498,180.1175,763.59033L180.1175,763.59033L166.76022,826.0005L164.12827,817.80646L234.58423,881.9283L225.7939,880.20886L284.3443,858.7005C287.1871,857.6562,290.3692,858.17737,292.7303,860.07404L292.7303,860.07404L351.86963,907.5801C355.58792,910.56696,356.18088,916.00256,353.194,919.7209C350.20712,923.4392,344.7715,924.03217,341.05322,921.0453L341.05322,921.0453L281.91388,873.53925L290.29987,874.9128L231.74944,896.42114C228.72787,897.5311,225.33977,896.86835,222.9591,894.7017L222.9591,894.7017L152.50314,830.5799C150.23033,828.5114,149.22803,825.391,149.87119,822.38586L149.87119,822.38586L163.22845,759.9757L165.72484,768.0437L106.62098,711.8903C104.90495,710.25995,103.93336,707.99664,103.93336,705.62964L103.93336,705.62964L103.93336,705.62866C103.93336,700.85925,107.79972,696.9929,112.56912,696.9929C117.338524,696.9929,121.20489,700.85925,121.20489,705.62866 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M259.59564,791.6079L259.59564,791.6079L259.59564,791.6089L244.43428,785.95264L294.72928,727.92737C297.85315,724.32336,303.30716,723.9342,306.91113,727.05804C310.5151,730.1819,310.90436,735.63586,307.7805,739.23987L307.7805,739.23987L257.48547,797.26514C255.12419,799.9893,251.31906,800.9601,247.94135,799.69995C244.56363,798.4398,242.3241,795.214,242.3241,791.6089L242.3241,791.6089L242.3241,791.6079C242.3241,786.8385,246.19046,782.97217,250.95987,782.97217C255.72928,782.97217,259.59564,786.8385,259.59564,791.6079 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M411.74884,693.3822L411.74884,693.3822C411.91144,693.3868,405.46262,693.2157,401.99176,692.7703L401.99173,692.7703C393.07025,691.6254,384.3128,689.0773,376.19305,685.45935L376.19308,685.45935C354.07422,675.6039,336.57733,653.90063,329.5647,631.36597L329.5647,631.3659C318.25018,595.00726,350.0304,545.4593,385.5711,534.3994L385.57108,534.3994C388.72812,533.417,391.96576,532.71326,395.2567,532.34314L395.2568,532.34314C399.97775,531.8122,404.90018,531.51184,409.89987,531.51184L409.89987,531.51184C428.2719,531.51184,449.0315,535.59204,463.68726,548.83527L463.6873,548.83527C474.35327,558.4733,480.6205,571.8333,484.91058,583.7165L484.91058,583.7165C489.2738,595.80225,493.3286,610.30176,491.54095,624.87964L491.54095,624.87964C488.4577,650.0223,468.9046,673.0917,447.33932,683.91754L447.33936,683.9175C439.5951,687.8051,431.1194,690.8629,422.28967,692.39825L422.2898,692.3982C418.78906,693.00696,412.34335,693.3795,412.48337,693.3715L411.9907,684.7498L411.9907,684.7498L411.74884,693.3822 M412.23254,676.11743L411.9907,684.7498L411.9907,684.7498L411.49802,676.1281C411.6526,676.11926,417.0126,675.7852,419.3307,675.3821L419.3308,675.382C426.21527,674.1849,433.08,671.7501,439.5905,668.4818L439.59055,668.48175C457.11014,659.6868,472.1579,641.0432,474.39783,622.77734L474.39783,622.77734C475.66846,612.41583,472.8342,601.12897,468.66528,589.58136L468.66528,589.58136C464.6586,578.48315,459.57004,568.3932,452.10757,561.64996L452.1076,561.64996C442.046,552.5581,426.39774,548.7833,409.89987,548.7833L409.89987,548.7833C405.58673,548.7833,401.30737,549.0431,397.18704,549.5065L397.18713,549.5065C395.06204,549.7455,392.8969,550.2082,390.7031,550.89087L390.70306,550.89087C362.533,559.6571,338.08798,600.6286,346.05615,626.23395L346.05615,626.2339C351.7801,644.62744,366.18814,662.093,383.2225,669.683L383.22253,669.683C389.90472,672.6604,397.03854,674.7215,404.1901,675.6392L404.19006,675.6392C406.61438,675.9503,412.07053,676.1129,412.23254,676.11743 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M634.0124,553.79626L634.0124,553.79626C587.7117,538.6858,538.9318,522.9187,506.51416,494.56055L506.51413,494.56055C473.8139,465.95514,458.38733,425.17114,443.76077,386.9571C442.05588,382.5028,444.2847,377.50983,448.73898,375.80493C453.19327,374.10004,458.18625,376.32886,459.89114,380.78314L459.89114,380.78314C474.82773,419.80716,488.96405,456.26083,517.88586,481.56097L517.88586,481.56097C547.09033,507.10834,591.9906,521.9142,639.3709,537.37695C643.90497,538.8567,646.38104,543.7318,644.9013,548.26587C643.4216,552.7999,638.54645,555.276,634.0124,553.79626 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M167.71442,762.9912L167.71442,762.9912L167.71442,762.9922C167.71442,766.3344,165.78584,769.3766,162.76305,770.80255L162.76305,770.80255C112.45422,794.53485,66.131905,816.762,45.975193,851.89954L45.975193,851.89954C31.343788,877.4052,30.010567,910.59607,28.841972,944.51L28.841972,944.51C28.417412,956.83124,27.99419,969.2188,26.805786,980.83655L26.805786,980.83655C22.381443,1024.0885,7.456775,1055.8516,-6.8456197,1086.406C-8.867607,1090.7256,-14.008467,1092.5881,-18.328053,1090.5662C-22.647638,1088.5442,-24.510208,1083.4033,-22.48822,1079.0837L-22.48822,1079.0837C-8.168295,1048.4918,5.529058,1019.10986,9.623916,979.079L9.623916,979.079C10.742063,968.1481,11.151677,956.3656,11.580685,943.9153L11.580686,943.9153C12.711059,911.1106,13.826771,873.23096,30.99368,843.3053L30.99368,843.3053C54.441086,802.4314,106.91083,778.05304,155.39424,755.1818L150.44287,762.9922L150.44287,762.9912C150.44287,758.2218,154.30923,754.35547,159.07864,754.35547C163.84805,754.35547,167.71442,758.2218,167.71442,762.9912 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M-19.863346,1079.6517L-19.863346,1079.6517C2.3956585,1064.6387,25.478077,1049.0737,70.09086,1039.8956L70.090836,1039.8956C80.88667,1037.6746,92.91351,1035.8342,105.26142,1033.9423L105.26136,1033.9423C119.02473,1031.8334,133.28867,1029.6458,147.34439,1026.7542L147.34436,1026.7542C172.46552,1021.58594,196.01834,1014.3332,213.93906,1002.0539L213.93906,1002.0539C251.0888,976.59894,266.68872,927.8939,283.2398,874.9172C284.66208,870.36475,289.50552,867.8273,294.05792,869.2496C298.61032,870.6719,301.1478,875.51526,299.72552,880.0677L299.72552,880.0677C283.72104,931.2949,266.76508,986.7947,223.7016,1016.3017L223.7016,1016.3017C202.8819,1030.5674,176.57906,1038.3729,150.82474,1043.6714L150.8247,1043.6714C136.26945,1046.6658,121.572014,1048.9161,107.87728,1051.0145L107.87722,1051.0145C95.416115,1052.9238,83.85485,1054.6973,73.57123,1056.8129L73.571205,1056.8129C32.289104,1065.3058,11.453987,1079.362,-10.205601,1093.9708C-14.159681,1096.6377,-19.527058,1095.5942,-22.19397,1091.6401C-24.860882,1087.686,-23.817427,1082.3186,-19.863346,1079.6517 Z"/></g><g style="fill:currentColor; fill-opacity:1.0; stroke-linejoin: miter"><path d="M133.20279,909.83435L133.20279,909.83435L185.13966,851.1673C188.30109,847.5962,193.75883,847.2641,197.32993,850.42554C200.90102,853.587,201.23312,859.0447,198.0717,862.6158L198.0717,862.6158L146.13483,921.28284C142.9734,924.85394,137.51566,925.18604,133.94456,922.0246C130.37347,918.86316,130.04137,913.40546,133.20279,909.83435 Z"/></g></g>`;

    audio = document.getElementById("ototw");

    try {
      fetchRepos();
    } catch (e) {
      document.getElementById("projects").children[1].innerHTML = "Failed to GET Repositories.";
    }
  });

  async function fetchRepos() {
    let response = await fetch("https://api.github.com/users/skndash96/repos?sort=created")
    let rlist = await response.json();

    rlist = rlist
      .filter(r => r.description && !r.description.toLowerCase().includes("sandbox"))
      .map(r => new Promise((resolve, reject) => {
          fetch(`https://api.github.com/repos/${r.full_name}/languages`)
            .then(res2 => res2.json())
            .then((lang) => {
              r.lang = lang;
              resolve(r);
            })
            .catch((e) => reject(e));
        })
      );

    repos = (await Promise.allSettled(rlist))
      .filter(p => p.status === "fulfilled")
      .map(p => p.value);
    console.log(repos);
  }

  function toggleAudio() {
    if (!audio) return;

    audio.play();
    isPlaying = true;
  }

  function capitalise(str) {
    return str.split("\s+").map(s => s[0].toUpperCase() + s.substring((1))).join(" ");
  }
</script>

<svelte:head>
  <title>Me - Dash Skndash</title>
</svelte:head>

<div>
  <section id="hero">
    <div class="title">
      <h1 class="huge">Hello!</h1>
      <h1>I'm Dash Skndash.</h1>
    </div>
    <div class="img">
      <svg
        id="astronaut"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1080 1080"
      ></svg>
    </div>
  </section>

  <section id="about">
    <h1>Dude, Myth or Mega Human</h1>

    <div class="flexbox">
      <div>
        <div class="img">
          <img src={ProfilePic} alt="logo" />
          <svg
            id="rocket"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="-280 0 1280 1280"
          ></svg>
        </div>

        <div class="audio">
          <button class="audio" on:click={toggleAudio}>🔊</button>
          <audio id="ototw" loop src={AudioOTOTW}></audio>
        </div>
      </div>

      <div>
        <p>
          This text will be filled with something that makes more sense soon.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          augue lacus, fermentum eget mi at, pretium posuere eros. Morbi in dui
          diam.
        </p>

        <button class="classic ring"> Meet me </button>
      </div>
    </div>
  </section>

  <section id="work">
    <h1>What I do</h1>

    <p>
      🤌 | Seek things that drive me curious
      <br />⌨️ | Develop apps and websites
      <br />📺 | Binge-watch series and anime
    </p>

    <hr />

    <a class="blog" href="/post">
      <h1>Checkout Blog</h1>
      <i class="fa-solid fa-up-right-from-square"></i>
    </a>
  </section>

  <section id="projects">
    <h1>Recent Projects</h1>

    <ul>
      {#if repos} 
      {#each repos as p}
        <li class="projectTile">
          <h4>
            <a href="{p.html_url}" target="_blank">
              {capitalise(p.name)}
              <span style="margin-left: .5rem; opacity:.4; font-weight: 400;">({p.private ? "private" : "public"})</span>
            </a>
          </h4>
          {#each Object.keys(p.lang) as l}
            <span style="font-size:.8rem; letter-spacing:.1rem; margin-left:.5rem; background: #00000066;">{l}</span>
          {/each}
          <p>{p.description}</p>
          {#if p.homepage}
            <a class="color" href={p.homepage} target="_blank">Live page.</a>
          {/if}
          <!-- <div class="imgBox">
            <img
              width="200"
              height="150"
              src={p.thumbnail}
              alt="Thumbnail for {p.title}"
            />
          </div> -->
        </li>
      {/each}
      {:else} ...Loading {/if}
      </ul>
  </section>

  <section id="contact">
    <h1 class="contact-title">Contact</h1>

    <div class="contact-form">
      <form on:submit|preventDefault>
        <input type="text" placeholder="whats your email?" />
        <textarea placeholder="whats in your mind?"></textarea>
        <button class="classic"> Submit </button>
      </form>
    </div>

    <div class="social">
      <a rel="external" href="https://instagram.com/skndash96">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a rel="external" href="https://github.com/skndash96">
        <i class="fa-brands fa-github"></i>
      </a>
      <a rel="external" href="#contact">
        <i class="fa-brands fa-youtube"></i>
      </a>
      <a rel="external" href="#contact">
        <i class="fa-brands fa-dribbble"></i>
      </a>
      <a rel="external" href="mailto:dashskndash@gmail.com">
        <i class="fa-regular fa-envelope"></i>
      </a>
    </div>
  </section>
</div>

<style>
  #about p,
  #work p,
  #contact .contact-form,
  #contact .social {
    width: clamp(16rem, 80vw, 36rem);
  }

  #hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0)),
      url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72zuHNCQYujRbTKF_52OElLLofOwLtursqw&usqp=CAU);
    justify-content: center;
    gap: 0;
    background-size: cover;
    min-height: 80vh;
  }
  #hero div.title {
    text-align: left;
    width: max-content;
  }
  #hero h1 {
    font-size: 2rem;
  }
  #hero h1.huge {
    font-size: 3.4rem;
  }
  #hero div.img {
    margin-top: 2rem;
    width: 40vmin;
    height: 40vmin;
    position: relative;
  }
  #hero div.img svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #about {
    background: var(--black);
    color: var(--white);
  }
  #about div.flexbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    max-width: var(--max-w-lg);
  }
  #about div.flexbox > div:first-child > * {
    width: fit-content;
    margin: 1rem auto;
  }
  #about div.flexbox > div:last-child p {
    width: fit-content;
  }
  #about div.flexbox > div:first-child {
    flex-shrink: 0;
  }
  @media screen and (min-width: 556px) {
    #about div.flexbox {
      flex-direction: row;
    }
  }
  #about div.img {
    width: 8rem;
    height: 8rem;
    background: #444;
    position: relative;
    border-radius: 50%;
  }
  #about div.img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  #about div.img svg {
    color: #409331;
    width: inherit;
    height: inherit;
    position: absolute;
    top: -2.5rem;
    right: -2.5rem;
    transform-origin: right;
    transform: rotate(-25deg);
  }
  #about button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background: var(--white);
    color: var(--black);
  }
  #about button.audio {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
  }

  #work {
    background: var(--black);
    padding-bottom: 8rem;
  }
  #work hr {
    background: var(--white);
    margin: 0 auto;
    width: 50%;
  }
  #work a.blog h1 {
    display: inline;
    margin-right: 0.5rem;
  }

  #projects > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 52rem;
    gap: 2rem;
  }
  #projects .projectTile {
    background-color: #ffffff11;
    padding: 2rem;
    flex-grow: 1;
  }
  #projects .projectTile p {
    margin: .5rem 0;
    margin-left: 2rem;
  }
  #projects a:hover {
    color: lightseagreen;
  }

  #contact {
    background-image: linear-gradient(var(--lblue), var(--dblue));
    color: var(--white);
    justify-content: center;
  }
  #contact form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    place-items: center;
  }
  #contact form input,
  #contact form textarea {
    border-bottom: 1px solid var(--gray);
    transition: all 200ms ease-out;
    width: 100%;
  }
  #contact form input,
  #contact form input::placeholder,
  #contact form textarea,
  #contact form textarea::placeholder {
    color: var(--white);
  }
  #contact form input:focus,
  #contact form textarea:focus {
    border-bottom: 1px solid var(--white);
  }
  #contact form button {
    width: fit-content;
    margin: 0 auto;
    padding: 0.25rem 0.75rem;
    color: var(--hover);
    background-color: var(--gray);
    border-radius: 5px;
    font-weight: 600;
  }
  #contact .social {
    display: flex;
    width: fit-content;
    margin: 0 auto;
    gap: 1rem;
  }
  #contact .social a {
    font-size: 1.2rem;
    color: var(--white);
  }
  #contact .social a:hover {
    color: var(--gray);
    transform: scale(95%);
    background: none;
  }
</style>
